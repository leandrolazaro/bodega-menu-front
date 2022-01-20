<template>
  <div class="Menu">
    <div class="Body"></div>
    <div class="Header">
        <MenuNavBar/>
    </div>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import MenuNavBar from '@/components/MenuNavBar.vue'

export default {
  name: "Menu",
  components:{
      MenuNavBar
  }
};
</script>

<style scoped>

.Menu{
    background-color: #1c1e21;
    height: 100%;
}
</style>
