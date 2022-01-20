<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" >
      <b-navbar-brand href="#" to="/admin">Bodega Admin</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#" to="/admin">Home</b-nav-item>
          <b-nav-item href="#" to="/admin/categorias">Categorias</b-nav-item>
          <b-nav-item href="#" to="/admin/itens">Itens</b-nav-item>
          <b-nav-item href="#" disabled>Banners</b-nav-item>
          <b-nav-item href="#" disabled>Destaques</b-nav-item>
          <b-nav-item href="#" disabled>Promoções</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>{{ getUser.admin_name }}</em>
            </template>
            <b-dropdown-item href="#" disabled>Conta</b-dropdown-item>
            <b-dropdown-item v-on:click="logout">Sair</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AdminNavBar",
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      "getUser",
      "getToken"
      // ...
    ]),
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => this.$router.push('/login'));
    },
  },
};
</script>


<style scoped>
 .navbar{
    background-color: #591B1C!important;
 }
</style>