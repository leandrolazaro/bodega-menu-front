<template>
  <div class="ItensAdmin">
    <b-row class="header-categorias no-gutters">
      <b-col md="2 d-flex justify-content-center align-items-center"
        ><h3>Vinhos</h3></b-col
      >
      <b-col md="8 d-flex justify-content-center align-items-center">
        <div>
          <b-form @submit="getWines" inline>
            <b-form-select
              id="inline-form-custom-select-pref"
              class="mb-2 mr-sm-2 mb-sm-0"
              v-model="search.wine_type"
            >
              <b-form-select-option :value="null"
                >Todos os tipos</b-form-select-option
              >
              <b-form-select-option
                v-for="(wine_type, i) in wine_types"
                :key="i"
                :value="wine_type.wine_type_name"
                >{{wine_type.wine_type_name}}</b-form-select-option
              >
            </b-form-select>
            <b-form-select
              id="inline-form-custom-select-pref"
              class="mb-2 mr-sm-2 mb-sm-0"
              v-model="search.wine_grape"
            >
              <b-form-select-option :value="null"
                >Todas as uvas</b-form-select-option
              >
              <b-form-select-option
                v-for="(wine_grape, i) in wine_grapes"
                :key="i"
                :value="wine_grape.wine_grape_name"
                >{{wine_grape.wine_grape_name}}</b-form-select-option
              >
            </b-form-select>
            <b-form-select
              id="inline-form-custom-select-pref"
              class="mb-2 mr-sm-2 mb-sm-0"
              v-model="search.wine_country"
            >
              <b-form-select-option :value="null"
                >Todas regiões</b-form-select-option
              >
              <b-form-select-option
                v-for="(wine_country, i) in wine_countries"
                :key="i"
                :value="wine_country.wine_country_name"
                >{{wine_country.wine_country_name}}</b-form-select-option
              >
            </b-form-select>
            <div style="margin-top: 10px">
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
            </div>
          </b-form>
        </div>
      </b-col>
      <b-col md="2 d-flex justify-content-center align-items-center">
        <b-button block class="d-inline" v-b-modal.modalCreateWine
          >Novo Item</b-button
        >
        <CreateWineModal :wine_types="this.wine_types" :wine_grapes="this.wine_grapes" :wine_countries="this.wine_countries"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ApiWineCategories from "@/api/wine-categories.js";

export default {
  name: "WinesAdmin",
  data() {
    return {
      search: {
        wine_type: null,
        wine_grape: null,
        wine_country: null,
        search: "",
      },
      wine_types: {},
      wine_grapes: {},
      wine_countries: {},
    };
  },
  components: {
    CreateWineModal: () => import(/* webpackPrefetch: true */ '@/components/CreateWineModal.vue')
  },
  created: async function () {
    this.getWineTypes();
    this.getWineGrapes();
    this.getWineCountries();
  },
  methods: {
    getWineTypes() {
      ApiWineCategories.getWineTypes(
        (body) => {
          this.wine_types = body.data;
        },
        (err) => {
          alert(err);
        }
      );
    },
    getWineGrapes() {
      ApiWineCategories.getWineGrapes(
        (body) => {
          this.wine_grapes= body.data;
        },
        (err) => {
          alert(err);
        }
      );
    },
    getWineCountries() {
      ApiWineCategories.getWineCountries(
        (body) => {
          this.wine_countries = body.data;
        },
        (err) => {
          alert(err);
        }
      );
    },
    getWines(){
      alert('getWines');
    }
  },
};
</script>

<style scoped>
.header-categorias {
  color: white;
  padding: 10px;
  background-color: #3b0f10;
}
.Itens {
  padding: 10px;
}
</style>
