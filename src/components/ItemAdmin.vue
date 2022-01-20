<template>
  <div class="ItemAdmin">
    <b-card no-body class="overflow-hidden">
      <b-row no-gutters>
        <b-col md="2">
          <b-card-img-lazy
            fluid
            fluid-grow
            :src="item.item_img_src"
            alt="Image"
            class="rounded-0"
          ></b-card-img-lazy>
        </b-col>
        <b-col md="4">
          <b-card-body :title="item.item_name">
            <b-card-text>
              {{ item.item_description }}
            </b-card-text>
          </b-card-body>
        </b-col>
        <b-col md="4">
          <b-card-body>
            <div v-if="item.promocional_item == 1">
              <s>R$ {{ item.price }}</s>
            </div>
            <div v-else>R$ {{ item.price }}</div>
            <div v-if="item.promocional_item == 1">
              R$ {{ item.promocional_price }}
            </div>
            <div v-if="item.available == 1">Visível</div>
            <div v-else>Invisível</div>
            <div v-if="item.featured == 1">Em destaque</div>
          </b-card-body>
        </b-col>
        <b-col md="2">
          <b-button class="button" block variant="primary" v-on:click="editItem"
            >Editar</b-button
          >
          <b-button
            block
            class="button"
            variant="danger"
            v-on:click="delItem(item.item_id)"
            >Excluir</b-button
          >
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import ApiItens from "@/api/itens.js";
// import Api from "@/api/categories.js";

export default {
  name: "ItemAdmin",
  props: {
    item: {},
  },
  methods: {
    delItem(item_id) {
      this.$showConfirmationModal(
        "Deletar item?",
        "Essa ação é permamente e não pode ser revertida",
        () => {
          this.$store.dispatch("showLoading");
          ApiItens.delItem(
            { item_id: item_id },
            () => {
              // alert(JSON.stringify(body))
              this.$store.dispatch("closeLoading");
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
    editItem(){
      this.$emit('edit-item', this.item);
    }
  },
};
</script>

<style scoped>
.button {
  margin: 10px;
}
.ItemAdmin {
  margin-bottom: 10px;
}
</style>
