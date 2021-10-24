<template>
  <v-app>
    <v-form class="text-center">
      <h2>Sign up</h2>
      <v-row justify="center">
        <v-col cols="8" sm="6" md="4">
          <v-text-field
            label="name"
            type="text"
            ref="name"
            v-model="name"
            required
          />
        </v-col>
      </v-row>
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
      <v-btn
        type="submit"
        @click.prevent="create"
        :loading="loading"
        :disabled="loading"
        >Sign up</v-btn
      >
      <div>#新規作成時に確認メールが送られます</div>
    </v-form>
  </v-app>
</template>

<script>
export default {
  data: function () {
    return {
      loading: false,
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    create() {
      this.loading = true;
      this.$store
        .dispatch({
          type: "auth/createUserWithProfileVerification",
          email: this.email,
          password: this.password,
          name: this.name,
          photo: "default",
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
  },
  computed: {
    getemailVerified: function () {
      return this.$store.getters["auth/emailVerified"] ?? true;
    },
  },
};
</script>

<style>
</style>