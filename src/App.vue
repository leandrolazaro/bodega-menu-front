<template>
  <div id="app" class="h-100 ">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
//import Api from "@/api/auth.js"

export default {
  name: 'App',
}
</script>

<style>
html, body {
height: 100%;
font-size: 20px;
}

body {
/* background: linear-gradient(50deg,#6c757d,#dee2e6);; */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;  */
  color: #2c3e50;
}


</style>
