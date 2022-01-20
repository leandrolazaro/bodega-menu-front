<template>
  <div class="justify-content-md-center success-alert">
    <b-alert style="margin-bottom: 0px;" :show="showSucessMessage" dismissible variant="success" @dismissed="closeSuccessMessage"> Sucesso! </b-alert>
  </div>
</template>

<script>
export default({
  name: "SucessMessage",
  props: {showSucessMessage:null},
  methods:{
      closeSuccessMessage(){
          this.$store.dispatch("closeSuccessMessage");
      }
  }
});
</script>

<style scoped>

.success-alert{
    position: fixed; 
    left: 0; 
    right: 0; 
    bottom: 0;
    margin-left: auto; 
    margin-right: auto; 
    margin-bottom: 0px;
    z-index: 1000;
}

</style>
