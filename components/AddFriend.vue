<template>
  <Dialog DialogTitle="Add Friend"
          :ThemeColor="ThemeColor"
          openBtnColor="#8ccb00"
          btnHeight="6vw"
          btnWidth="10.5vw"
          btnMinHeight="5vw"
          btnMinWidth="9vw">
    <template v-slot:BtnContent>
      <BtnText color="white"
               size="1vw">Add Friend
      </BtnText>
    </template>
    <template v-slot:DialogContent>
      <v-container>
        <v-card-title>Add Friend</v-card-title>
        <v-form>
          <v-col>
            <v-text-field type="text"
                          label="friend id"
                          v-model="requestFriendId"
                          required/>
          </v-col>
          <v-card-actions class="justify-end">
            <!-- <v-btn @click="dialog = false"> Cancel </v-btn> -->
            <v-btn type="submit"
                   @click.prevent="requestFriend"
                   :loading="loading"
                   :disabled="loading">
              Send
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-container>
    </template>
  </Dialog>
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
      loading: false,
      requestFriendId: "",
    };
  },
  methods: {
    requestFriend() {
      this.loading = true;
      this.$store
        .dispatch({
          type: "friend/requestFriend",
          id: this.requestFriendId,
        })
        .then(() => {
          this.loading = false;
          this.dialog = false;
          this.requestFriendId = "";
        })
        .catch((error) => {
          alert(error);
          this.loading = false;
          this.dialog = false;
          this.requestFriendId = "";
        });
    },
  },
}
</script>

<style>
.DialogTexts {
  color: white;
}
</style>
