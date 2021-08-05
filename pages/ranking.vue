<template>
  <v-app id="ranking">
    <h1>ランキング</h1>
    <ol>
      <li v-for="(data, key) in datas" :key="data">
        {{key}}さん <v-progress-linear color="light-blue" height="30" :value="data" striped>{{data}}</v-progress-linear>
      </li>
    </ol>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        datas:{
            a : 100,
            b : 90,
            c : 80,
            d : 70,
            e : 60,
            f : 50,
            g : 40,
            h : 30,
            i : 20,
            j : 10,
            k : 0
      }
      }
    },
    computed:{

    }
  }
</script>