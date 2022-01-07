<template>
  <div class="Admin">
    <AdminNavBar/>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import AdminNavBar from '@/components/AdminNavBar.vue'

export default {
  name: "Admin",
  components: {
    AdminNavBar
  },created: function(){
    // this.$store.dispatch("logout").then(() => this.$router.push('/login'));
  }
};
</script>
