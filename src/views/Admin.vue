<template>
  <div class="Admin">
    <SuccessMessage
      :showSucessMessage="this.$store.getters.getTimeSucessMessage"
    />
    <AdminNavBar />

    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import SuccessMessage from "@/components/SuccessMessage.vue";
import AdminNavBar from "@/components/AdminNavBar.vue";
import Api from "@/api/auth.js";

export default {
  name: "Admin",
  components: {
    AdminNavBar,
    SuccessMessage,
  },
  created: function () {
    if (!this.$store.getters.getLoginStatus) {
      this.$store.dispatch("logout").then(() => this.$router.push("/login"));
    } else {
      Api.loginStatus(
        (body) => {
          // alert(JSON.stringify(body));
          if (!body.token) {
            this.$store
              .dispatch("logout")
              .then(() => this.$router.push("/login"));
          }
          this.$store.dispatch("changeToken", body.token);
        },
        (err) => {
          alert(err);
        });
    }
  },
};
</script>
