<template>
  <div>
    <b-list-group-item class="d-flex justify-content-between">
      <div class="d-inline d-flex align-items-center">
        {{ category.category_name }}
      </div>
      <div class="d-inline">
        <b-button class="button" variant="primary" v-on:click="editCategory">Editar</b-button>
        <b-button
          class="button"
          variant="danger"
          v-on:click="delCategory(category.category_id)"
          >Excluir</b-button
        >
      </div>
    </b-list-group-item>
  </div>
</template>

<script>
import Api from "@/api/categories.js";

export default {
  name: "CategoriaAdmin",
  props: {
    category: {},
  },
  methods: {
    delCategory(category_id) {
      this.$showConfirmationModal(
        "Deletar categoria?",
        "Deletar uma categoria causa a deleção de TODOS os itens vinculados a ela!",
        () => {
          this.$store.dispatch("showLoading");
          Api.delCategory(
            { category_id: category_id },
            () => {
              this.$store.dispatch("closeLoading");
              this.$store.dispatch("showSucessMessage").then(() => {});
              this.$emit("reload");
            },
            (err) => {
              alert(JSON.stringify(err));
            }
          );
        },
        () => {
          //nao
        }
      );
    },
    editCategory(){
      this.$emit('edit-category', this.category);
    }
  },
};
</script>

<style scoped>
.button {
  margin: 10px;
}
</style>
