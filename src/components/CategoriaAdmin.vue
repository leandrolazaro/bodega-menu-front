<template>
  <div>
    <b-list-group-item class="d-flex justify-content-between">
      <div class="d-inline d-flex align-items-center">{{category.category_name}}</div>
      <div class="d-inline">
        <b-button class="button" variant="primary">Editar</b-button>
        <b-button class="button" variant="danger">Excluir</b-button>
      </div>
    </b-list-group-item>
  </div>
</template>

<script>
export default {
  name: "CategoriaAdmin",
  props: {
      category: {}
  }
};
</script>

<style scoped>
.button{
    margin:10px;
}
</style>
