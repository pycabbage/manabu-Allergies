<template>
  <v-avatar :size="avatarIconSize">
    <v-img :src="IconPath">
      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <slot name="placeholder" />
        </v-row>
      </template>
    </v-img>
  </v-avatar>
</template>

<script>
export default {
  computed: {
    IconPath: function() {
      if (this.userIconPath == "default") {
        return "./defaultAvater.png";
      } else {
        return this.userIconPath;
      }
    }
  },
  props: {
    userIconPath: {
      require: true
    },
    avatarIconSize: {
      type: String,
      require: false,
      default: "96",
    },
  }
}
</script>
