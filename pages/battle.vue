<template>
  <v-app id="inspire" class="text-center">
    <BattleCanvas />
  </v-app>
</template>

<script>
  import BattleCanvas from "~/components/BattleCanvas";
  export default {
    components: { BattleCanvas }
  }
</script>
