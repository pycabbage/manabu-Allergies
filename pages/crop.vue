<template>
  <v-app>
    <v-container v-if="imgSrc && !visionResult">
      <v-btn elevation="2" block color="primary" @click="cropImage">Crop & Scan</v-btn>
      <vue-cropper
        class="cropper"
        ref="cropper"
        :src="imgSrc"
        :guides="true"
        :view-mode="2"
        :auto-crop-area="1"
        :background="true"
        drag-mode="crop"
      />
    </v-container>
    <v-container v-else-if="visionResult!==''">
      <v-container v-for="elem in includeList" v-bind:key="elem">
        <v-card
          elevation="2"
        >
          <v-card-title v-text="elem"></v-card-title>
          <v-card-actions>
            <v-btn
              text
              @click="selectElement(elem)"
            >
              この品目で進む
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-container>
    <v-container>
      <v-btn to="/scan" nuxt>Back to scan page</v-btn>
    </v-container>
  </v-app>
</template>

<script>
  import VueCropper from "vue-cropperjs";
  import "cropperjs/dist/cropper.css";
  const APIKEY = "AIzaSyB8-ldByAwinojKoMBHNkvO-0ciC_ZrvXo";
  import Data from "../plugins/data";

  export default {
    components: { VueCropper },
    mounted() {
      this.imgSrc = this.$store.state.image.image
      this.file = this.$store.state.file.file
      console.log(this.file)
      if (!this.imgSrc) {
        this.$router.push({path: 'scan'});
      }
    },
    data() {
      return {
        imgSrc: "",
        cropImg: "",
        visionResult: undefined,
        includeList: [],
        AllerPatterns: [
          {
            name: "卵",
            patterns: ["卵", "たまご", "タマゴ"]
          },
          {
            name: "乳",
            patterns: ["牛乳", "脱脂粉乳", "練乳", "はっ酵乳", "全粉乳"]
          },
          {
            name: "小麦",
            patterns: ["小麦"]
          },
          {
            name: "そば",
            patterns: ["そば", "蕎麦"]
          },
          {
            name: "落花生（ピーナッツ）",
            patterns: ["ピーナッツ", "落花生"]
          },
          {
            name: "えび",
            patterns: ["えび", "エビ", "海老"]
          },
          {
            name: "かに",
            patterns: ["かに", "カニ", "蟹"]
          },
        ]
      };
    },
    methods: {
      cropImage() {
        this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
        this.sendVisionAPI()
      },
      sendVisionAPI() {
        const url = "https://vision.googleapis.com/v1/images:annotate";
        const data = {
          "requests": [
            {
              "image": {
                "content": this.cropImg.split("base64,")[1]
              },
              "features": [
                {
                  "maxResults": 50,
                  "type": "DOCUMENT_TEXT_DETECTION"
                },
                {
                  "maxResults": 50,
                  "type": "CROP_HINTS"
                },
                {
                  "maxResults": 50,
                  "type": "LABEL_DETECTION"
                },
              ]
            }
          ]
        }
        fetch(`${url}?key=${APIKEY}`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          body: JSON.stringify(data),
          cache: 'no-cache',
          mode: 'cors'
        })
        .then(body=>body.json())
        .then(d => {
          this.visionResult = d.responses[0].fullTextAnnotation.text
          this.matchPattern()
        })
      },
      matchPattern() {
        this.AllerPatterns.map(mp => {
          if (mp.patterns.map(a=>!!this.visionResult.match(a)).includes(true)) {
            this.includeList.push(mp.name)
          }
        })
        console.log(`this includes ${this.includeList}`)
      },
      selectElement(e) {
        const detectKey = n => {
          var data = [
            {
              name: "卵",
              id: "egg"
            },
            {
              name: "えび",
              id: "shrimp"
            },
            {
              name: "かに",
              id: "crab"
            },
            {
              name: "そば",
              id: "soba"
            },
            {
              name: "小麦",
              id: "wheat"
            },
            {
              name: "乳",
              id: "milk"
            },
            {
              name: "落花生（ピーナッツ）",
              id: "peanut"
            }
          ]
          var i = data.map(d=>e===d.name).indexOf(true)
          return data[i].id
        }
        var id = detectKey(e)
        console.log("id : ", id)
        console.log("uploading ... ")
        Data.init("private").then(data => data.setFile(id, this.file))
        .then(()=>{
          console.log("Uploaded.")
        })
        this.$router.push({path: 'battle', query: {id: id}});
      }
    }
  };
</script>

<style>
</style>