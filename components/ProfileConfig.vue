<template>
  <ConfigPanel :PanelHeader="PanelHeader">
    <template v-slot:PanelContent>
      <p>名前:{{ User.name }}</p><br>
      <p>年齢:{{ User.age }}</p><br>
      <p>ID:{{ User.id }}</p><br>
      <p>Email:{{ User.email }}</p>
    </template>
  </ConfigPanel>
</template>

<script>
export default {
  props: {
    User: Object,
  },
  data(){
    return {
      PanelHeader: 'Profile',
    };
  },
}
</script>
