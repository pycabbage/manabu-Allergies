<template>
  <v-app>
    <v-form class="text-center">
      <h2>Login</h2>
      <v-row justify="center">
        <v-col cols="8" sm="6" md="4">
          <v-text-field
            label="email"
            type="email"
            ref="email"
            v-model="email"
            required
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8" sm="6" md="4">
          <v-text-field
            label="password"
            type="password"
            ref="password"
            v-model="password"
            autocomplete="off"
            required
          />
        </v-col>
      </v-row>
      <div>
        <v-dialog v-model="dialog" width="400px">
          <template v-slot:activator="{ on }">
            <a v-on="on"><u>Forgot password?</u></a>
          </template>
          <v-card>
            <v-form>
              <v-card-title>Password reset</v-card-title>
              <v-col>
                <v-text-field
                  type="email"
                  label="email"
                  ref="resetEmail"
                  v-model="resetEmail"
                  required
                />
              </v-col>
              <v-card-actions class="justify-end">
                <v-btn @click="dialog = false"> Cancel </v-btn>
                <v-btn
                  type="submit"
                  @click.prevent="reset"
                  :loading="loading"
                  :disabled="loading"
                >
                  Send
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-dialog>
      </div>
      <div>
        <router-link to="/create">Don’t have an account?</router-link>
      </div>
      <v-btn
        type="submit"
        @click.prevent="login"
        :loading="loading"
        :disabled="loading"
        >Login</v-btn
      >
    </v-form>
  </v-app>
</template>

<script>
export default {
  data: function () {
    return {
      dialog: false,
      loading: false,
      email: "",
      password: "",
      resetEmail: "",
    };
  },
  methods: {
    login() {
      this.loading = true;
      this.$store
        .dispatch({
          type: "auth/signInWithVerification",
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.loading = false;
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error);
          this.loading = false;
        });
    },
    reset() {
      this.loading = true;
      this.$store
        .dispatch({
          type: "auth/resetPassword",
          email: this.resetEmail,
        })
        .then(() => {
          alert("success");
          this.resetEmail = "";
          this.dialog = false;
          this.loading = false;
        })
        .catch((error) => {
          alert(error);
          this.loading = false;
        });
    },
  },
  computed: {
    getemailVerified: function () {
      return this.$store.getters["auth/emailVerified"];
    },
  },
};
</script>

<style>
</style>