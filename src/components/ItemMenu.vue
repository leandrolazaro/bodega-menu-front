<template>
  <div class="ItemAdmin">
    <b-card no-body class="overflow-hidden text-white bg-dark">
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
        <b-col md="8">
          <b-card-body>
            <b-card-title><b>{{item.item_name}}</b></b-card-title>
            <b-card-text class="item-description ">
              <div v-if="seeMore">
                {{item.item_description}}
                <a style="color:#ff6b75" @click="seeMore=false">Ver menos</a>
              </div>
              <div v-else>
                {{item.item_description.slice(0, 100)}}...
                <a style="color:#ff6b75" @click="seeMore=true">Ver mais</a>
              </div>
              
            </b-card-text>
          </b-card-body>
        </b-col>
        <b-col md="2">
          <b-card-body>
          
            <div style=" text-align: right;" class="normalPricePromocional" v-if="item.promocional_item == 1">
              <s>R$ {{ item.price }}</s>
            </div>
            <div style=" text-align: right;" class="normalPrice" v-else>R$ {{ item.price }}</div>
            <div style=" text-align: right;" class="promocionalPrice" v-if="item.promocional_item == 1">
              R$ {{ item.promocional_price }}
            </div>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import ApiItens from "@/api/itens.js";
// import Api from "@/api/categories.js";

export default {
  name: "Itemmenu",
  data(){
    return{
      seeMore:false
    }
  },
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
    editItem() {
      this.$emit("edit-item", this.item);
    },
  },
};
</script>

<style scoped>
.button {
  margin: 10px;
}
.ItemAdmin {
  margin-bottom: 15px;
}
.normalPricePromocional {
  color: #fb4264;
  font-size: 20px;
  text-shadow: 0 0 3vw #f40a35;
}

.normalPrice {
  color: #42fb45;
  font-size: 25px;
  text-shadow: 0 0 3vw #29f40a;
}

.promocionalPrice {
  color: #42fb45;
  font-size: 30px;
  text-shadow: 0 0 3vw #29f40a;
}

.item-description{
  font-size: 15px;
  font-family: Avenir, Helvetica, Arial, sans-serif;;
}

</style>
