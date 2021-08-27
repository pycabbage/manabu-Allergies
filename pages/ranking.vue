<template>
  <v-app id="ranking">
    <PageTitle>ランキング</PageTitle>
    <ol>
      <li v-for="(data, key) in sort_data" :key="data">
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
            c : 80,
            a : 100,
            b : 90,
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
      sort_data : function(){
        var obj=this.datas
        var array = Object.keys(obj).map((k)=>({ key: k, value: obj[k] }));
        array.sort((a, b) =>  - b.value-a.value);
        obj = Object.assign({}, ...array.map((item) => ({
          [item.key]: item.value,
        })));
        return obj
      }
    }
  }
</script>
