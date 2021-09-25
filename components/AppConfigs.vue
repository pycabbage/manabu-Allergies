<template>
  <!-- <div class="AppConfig"> -->
  <!--   <SettingDialog DialogTitle="Configs" -->
  <!--                  :ToolBarColor="ThemeColor"> -->
  <!--     <div class="ConfigSwitches" -->
  <!--          v-for="(conf, key) of AppConfigs" :key="key"> -->
  <!--       <v-switch @click="InvertConfigValid(key)" -->
  <!--                 :label="conf.name"> -->
  <!--       </v-switch> -->
  <!--     </div> -->
  <!--   </SettingDialog> -->
  <!-- </div> -->
</template>

<script>
export default {
  props: {
    ThemeColor: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      AppConfigs: {
        test: {
          name: 'test option',
          isValid: false,
        },
      },
    };
  },
  methods: {
    InvertConfigValid(ConfigName) {
      this.AppConfig[ConfigName].isValid = !this.AppConfig[ConfigName].isValid;
    },
  },
}
</script>
