<template>
  <v-app>
    <v-stepper alt-labels v-model="step">
      <v-stepper-header>
        <v-stepper-step step="1" :complete="step > 1">
          スキャン画像のアップロード
        </v-stepper-step>
        <v-divider />
        <v-stepper-step step="2" :complete="step > 2">
          画像の調整
        </v-stepper-step>
        <v-divider />
        <v-stepper-step step="3" :complete="step > 3">
          スキャン結果の選択
        </v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-container v-cloak @drop.prevent="addDropFile" @dragover.prevent>
            <v-file-input
              accept="image/png, image/jpeg, image/bmp"
              prepend-icon="mdi-camera"
              placeholder="画像をここにドロップするか、選択してください。"
              @change="setImage"
              capture="environment"
            ></v-file-input>
          </v-container>
        </v-stepper-content>
        <v-stepper-content step="2">
          <vue-cropper
            class="cropper"
            ref="cropper"
            :src="imgSrc"
            :guides="true"
            :view-mode="2"
            :auto-crop-area="1"
            :background="true"
            drag-mode="crop"
            v-if="imgSrc != '' "
          /><br />
          <v-btn elevation="2" block color="primary" @click="cropImage">次へ</v-btn>
        </v-stepper-content>
        <v-stepper-content step="3">
          <v-container v-if="visionResult !== ''">
          <v-container v-for="elem in includeList" v-bind:key="elem">
            <v-card elevation="2">
              <v-card-title v-text="elem"></v-card-title>
              <v-card-actions>
                <v-btn text @click="selectElement(elem)"> この品目で進む </v-btn>
              </v-card-actions>
            </v-card>
          </v-container>
        </v-container>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-app>
</template>

<script>
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
import Data from "../plugins/data";
const APIKEY = "AIzaSyB8-ldByAwinojKoMBHNkvO-0ciC_ZrvXo";
export default {
  components: { VueCropper },
  data() {
    return {
      step:1,
      imgSrc: "",
      visionResult: undefined,
      includeList: [],
      AllerPatterns: [
        {
          name: "卵",
          patterns: ["卵", "たまご", "タマゴ"],
        },
        {
          name: "乳",
          patterns: ["牛乳", "脱脂粉乳", "練乳", "はっ酵乳", "全粉乳"],
        },
        {
          name: "小麦",
          patterns: ["小麦"],
        },
        {
          name: "そば",
          patterns: ["そば", "蕎麦"],
        },
        {
          name: "落花生（ピーナッツ）",
          patterns: ["ピーナッツ", "落花生"],
        },
        {
          name: "えび",
          patterns: ["えび", "エビ", "海老"],
        },
        {
          name: "かに",
          patterns: ["かに", "カニ", "蟹"],
        },
      ],
    };
  },
  methods: {
    addDropFile(e) {
      this.setImage(e.dataTransfer.files[0]);
    },
    async setImage(e) {
      if (Object.prototype.toString(e) == "[object FileList]"){
        e=e[0]
      }
      /////////////////////////////////////////////////////
      // const data = await Data.init("private");
      // await data.setFile(/*"key"*/ "key", this.file);
      /////////////////////////////////////////////
      const fr = new FileReader();
      fr.onload = (ev) => {
        this.imgSrc = ev.target.result;
        this.step=2
      };
      fr.readAsDataURL(e);
    },
    cropImage() {
      this.imgSrc = this.$refs.cropper.getCroppedCanvas().toDataURL();
      this.step=3
      this.sendVisionAPI();
    },
    sendVisionAPI() {
      const url = "https://vision.googleapis.com/v1/images:annotate";
      const data = {
        requests: [
          {
            image: {
              content: this.imgSrc.split("base64,")[1],
            },
            features: [
              {
                maxResults: 50,
                type: "DOCUMENT_TEXT_DETECTION",
              },
              {
                maxResults: 50,
                type: "CROP_HINTS",
              },
              {
                maxResults: 50,
                type: "LABEL_DETECTION",
              },
            ],
          },
        ],
      };
      fetch(`${url}?key=${APIKEY}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        body: JSON.stringify(data),
        cache: "no-cache",
        mode: "cors",
      })
        .then((body) => body.json())
        .then((d) => {
          this.visionResult = d.responses[0].fullTextAnnotation.text;
          this.matchPattern();
        });
    },
    matchPattern() {
      this.AllerPatterns.map((mp) => {
        if (
          mp.patterns.map((a) => !!this.visionResult.match(a)).includes(true)
        ) {
          this.includeList.push(mp.name);
        }
      });
      console.log(`this includes ${this.includeList}`);
    },
    selectElement(e) {
      const detectKey = (n) => {
        var data = [
          {
            name: "卵",
            id: "egg",
          },
          {
            name: "えび",
            id: "shrimp",
          },
          {
            name: "かに",
            id: "crab",
          },
          {
            name: "そば",
            id: "soba",
          },
          {
            name: "小麦",
            id: "wheat",
          },
          {
            name: "乳",
            id: "milk",
          },
          {
            name: "落花生（ピーナッツ）",
            id: "peanut",
          },
        ];
        var i = data.map((d) => e === d.name).indexOf(true);
        return data[i].id;
      };

      var id = detectKey(e);
      console.log(id);
      const dataaaa = [
        {
          name: "卵",
          id: "egg",
        },
        {
          name: "乳",
          id: "milk",
        },
        {
          name: "小麦",
          id: "wheat",
        },
        {
          name: "そば",
          id: "soba",
        },
        {
          name: "落花生（ピーナッツ）",
          id: "peanut",
        },
        {
          name: "えび",
          id: "shrimp",
        },
        {
          name: "かに",
          id: "crab",
        },
      ];
      const zuk = dataaaa
        .map((ee, ind) => ({ ...ee, index: ind }))
        .filter((eee, inde) => eee.id == id);
      console.log(zuk[0].index);
      console.log("id : ", id);
      console.log("uploading ... ");
      Data.init("public").then((da) => {
        da.setZukan(zuk[0].index);
      });
      Data.init("private")
        .then((data) => data.setFile(id, this.file))
        .then(() => {
          console.log("Uploaded.");
        });
      this.$router.push({ path: "battle", query: { id: id } });
    },
  },
};
</script>

<style>
</style>