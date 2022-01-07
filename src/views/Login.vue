<template>
  <div class="Login d-flex align-items-center">
    <LoginForm class="LoginForm mx-auto " />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: "Login",
  components: {
      LoginForm
  },
};
</script>

<style scoped>
.Login{
    width: 100%;
    height: 100%;
    background-color: rgb(33, 33, 33);
}
</style>
