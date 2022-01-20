<template>
  <div class="CategoriasAdmin">
    <div class="header-categorias d-flex justify-content-between">
      <div class="d-inline"><h3>Categorias</h3></div>
      <div class="button-categorias d-inline">
        <b-button v-b-modal.modalCreateCategory>Nova Categoria</b-button>
        <CreateCategoriaModal @reload="reload" />
        <EditCategory @reload="reload"/>
      </div>
    </div>
    <b-list-group>
      <CategoriaAdmin v-for="category in categories" :key="category.category_id" :category="category" @reload="reload" @edit-category="editCategory"/>
    </b-list-group>
  </div>
</template>

<script>
import CreateCategoriaModal from "@/components/CreateCategoriaModal.vue";
import CategoriaAdmin from "@/components/CategoriaAdmin.vue";
import EditCategory from "@/components/EditCategory.vue";
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
    CategoriaAdmin,
    EditCategory
  },
  created: function () {
    this.reload();
  },methods:{
    reload(){
      this.$store.dispatch("showLoading");
      Api.getCategories(
        (body) => {
          this.$store.dispatch("closeLoading");
          this.categories=body.data;
        },
        (err) => {
          alert(JSON.stringify(err));
        }
      )
    },
    editCategory:function(category){
      this.$emit('updateCategoryData', {
        category_name:category.category_name,
        category_id:category.category_id
      });
      this.$bvModal.show("modalEditCategory");
    }
  }
};
</script>

<style scoped>
.header-categorias {
  color: white;
  padding: 10px;
  background-color: #3B0F10;
}
</style>
