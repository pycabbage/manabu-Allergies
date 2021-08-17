<template>
    <v-row>
      <v-card tile>
        <v-list shaped>
          <v-subheader>{{ CollectionName }}</v-subheader>
          <v-list-item-group color="primary">
            <slot name="CollectionContent"/>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-row>
</template>

<script>
export default {
  props: {
    CollectionName:String,
  },
}
</script>
