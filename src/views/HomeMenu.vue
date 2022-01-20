<template>
  <div class="HomeMenu">
    <div>
      <b-dropdown
        :text="text_select"
        block
        variant="dark"
        class="m-2"
        menu-class="w-100"
      >
        <b-dropdown-item @click="changeCategory('', 'TODOS ITENS')"
          >TODOS ITENS</b-dropdown-item
        >
        <b-dropdown-item
          v-for="category in categories"
          :key="category.category_id"
          @click="changeCategory(category.category_id, category.category_name)"
          >{{ category.category_name }}</b-dropdown-item
        >
      </b-dropdown>
    </div>
    <div class="BodyHomeMenu">
      <ItemMenu v-for="(item, i) in itens" :key="i" :item="item" />
      <scroll-loader :loader-method="loadMore" :loader-disable="disableLoader">
        <b-overlay
          style="color: white; margin: 10px"
          :show="isLoading"
          rounded="sm"
        ></b-overlay>
      </scroll-loader>
    </div>
  </div>
</template>

<script>
import Api from "@/api/menu.js";
import ItemMenu from "@/components/ItemMenu.vue";
// @ is an alias to /src

export default {
  name: "HomeMenu",
  data() {
    return {
      category_id: "",
      limiter: 0,
      categories: {},
      text_select: "TODOS OS ITENS",
      itens: [],
      isLoading: false,
      disable: false,
      disableLoader:true
    };
  },
  components: {
    ItemMenu,
  },
  methods: {
    getCategories() {
      Api.getCategories(
        (body) => {
          this.categories = body.data;
        },
        (err) => {
          alert(JSON.stringify(err));
        }
      );
    },
    changeCategory(category_id, category_name) {
      this.disableLoader=true;
      this.text_select = category_name;
      this.limiter = 0;
      this.category_id = category_id;
      this.itens = [];
      this.getItens(category_id, 0);
    },
    getItens(category_id, limiter) {
      this.isLoading = true;
      Api.getItens(
        { category_id: category_id, limiter: limiter },
        (body) => {
          if(body.data){
            this.itens=[].concat(...this.itens,...body.data);
            this.limiter += 10;
            console.log(this.itens);
          }
          this.disableLoader=false;
          this.isLoading = false;
        },
        () => {
          alert("error");
        }
      );
    },
    loadMore: async function () {
      // alert("aaaa");
      // alert(this.category_id);
      // alert(this.limiter);
      this.getItens(this.category_id, this.limiter);
    },
  },
  async created() {
    this.getCategories();
    this.getItens("", 0);
  },
};
</script>

<style scoped>
.BodyHomeMenu {
  padding: 10px;
}
.HomeMenu {
  background-color: #1c1e21;
}
</style>
