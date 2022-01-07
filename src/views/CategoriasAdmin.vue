<template>
  <div class="CategoriasAdmin">
    <div class="header-categorias d-flex justify-content-between">
      <div class="d-inline"><h3>Categorias</h3></div>
      <div class="button-categorias d-inline">
        <b-button v-b-modal.modal-1>Nova Categoria</b-button>
        <CreateCategoriaModal />
      </div>
    </div>
    <b-list-group>
      <CategoriaAdmin v-for="category in categories" :key="category.category_id" :category="category"/>
    </b-list-group>
  </div>
</template>

<script>
import CreateCategoriaModal from "@/components/CreateCategoriaModal.vue";
import CategoriaAdmin from "@/components/CategoriaAdmin.vue";
import Api from "@/api/categories.js";

export default {
  name: "CategoriasAdmin",
  data: function(){
    return{
      categories:{}
    }
  },
  components: {
    CreateCategoriaModal,
    CategoriaAdmin
  },
  created: function () {
    Api.getCategories(
        (body) => {
           this.categories=body.data;
        },
        () => {
          
          alert('Error')
        }
      )
  },
};
</script>

<style scoped>
.header-categorias {
  color: white;
  padding: 10px;
  background-color: rgb(100, 100, 100);
}
</style>
