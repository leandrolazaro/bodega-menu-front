<template>
  <div class="ItensAdmin">
    <b-row class="header-categorias no-gutters">
      <b-col md="2 d-flex justify-content-center align-items-center"
        ><h3>Itens</h3></b-col
      >
      <b-col md="8 d-flex justify-content-center align-items-center">
        <div>
          <b-form @submit="getItens" inline>
            <b-form-select
              id="inline-form-custom-select-pref"
              class="mb-2 mr-sm-2 mb-sm-0"
              v-model="search.category_id"
            >
              <b-form-select-option :value="null" 
                >Todas categorias</b-form-select-option
              >
              <b-form-select-option
                v-for="category in categories"
                :key="category.category_id"
                :value="category.category_id"
                >{{ category.category_name }}</b-form-select-option
              >
            </b-form-select>

            <label class="sr-only" for="inline-form-input-name">Name</label>
            <b-form-input
              v-model="search.search"
              id="inline-form-input-name"
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="Item"
            ></b-form-input>
            <b-button-group>
              <b-button type="submit" block variant="primary"
                >Consultar</b-button
              >
            </b-button-group>
          </b-form>
        </div>
      </b-col>
      <b-col md="2 d-flex justify-content-center align-items-center">
        <b-button block class="d-inline" v-b-modal.modalCreateItem
          >Novo Item</b-button
        >
        <CreateItemModal @reload="getItens" :categories="this.categories" />
        <EditItem @reload="getItens" :categories="this.categories"/>
      </b-col>
    </b-row>
    <div class="Itens">
      <ItemAdmin @reload="getItens" @edit-item="editItem" v-for="item in itens"
      :key="item.item_id"
      :item="item" />
    </div>
  </div>
</template>

<script>
import CreateItemModal from "../components/CreateItemModal.vue";
import ItemAdmin from "@/components/ItemAdmin.vue";
import EditItem from "@/components/EditItem.vue";
import ApiCategories from "@/api/categories.js";
import ApiItens from "@/api/itens.js";

export default {
  name: "ItensAdmin",
  data() {
    return {
      search: {
        category_id: null,
        search: "",
      },
      categories: {},
      itens: {}
    };
  },
  components: {
    CreateItemModal,
    ItemAdmin,
    EditItem
  },
  created: function () {
    this.getItens();
    ApiCategories.getCategories(
      (body) => {
        // alert(JSON.stringify(body.data));
        this.categories = body.data;
      },
      (err) => {
        alert(JSON.stringify(err));
      }
    );
  },
  methods: {
    getItensSubmit(event) {
      event.preventDefault();
      // alert(JSON.stringify(this.search));
      this.getItens();
    },
    getItens() {
      this.$store.dispatch("showLoading");
      ApiItens.getItens(this.search,
        (body) => {
          // alert(JSON.stringify(body));
          this.itens = body.data;
          this.$store.dispatch("closeLoading");
        },
        (err) => {
          alert(JSON.stringify(err));
        }
      );
    },
    editItem(item){
      this.$emit('updateItemData',{
        item_name: item.item_name,
        item_description: item.item_description,
        price: Number(item.price),
        promocional_item: Number(item.promocional_item),
        promocional_price: Number(item.promocional_price),
        featured_item: Number(item.featured_item),
        category_id: Number(item.category_id),
        available: Number(item.available),
        item_id: Number(item.item_id),
      });
      this.$bvModal.show("modalEditItem");

    }
  },
};
</script>

<style scoped>
.header-categorias {
  color: white;
  padding: 10px;
  background-color: #3B0F10;
}
.Itens {
  padding: 10px;
}
</style>
