<template>
  <div>
    <b-modal
      ref="modalCreateWine"
      id="modalCreateWine"
      title="Novo Vinho"
      hide-footer
    >
      <div>
        <b-form @submit="onSubmit">
          <b-form-group
            id="input-group-3"
            label="Imagem:"
            label-for="input-3"
          >
            <b-form-file
              accept="image/x-png,image/gif,image/jpeg"
              v-model="form.wine_img"
              ref="file"
              :state="Boolean(form.wine_img)"
              placeholder="Escolha a imagem de seu item."
              drop-placeholder="Coloque um arquivo aqui"
            ></b-form-file>
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label="Tipo de vinho:"
            label-for="input-3"
          >
            <b-form-select v-model="form.wine_type_name" class="mb-3" required>
              <b-form-select-option :value="null" disabled
                >Selecione uma categoria</b-form-select-option
              >
              <b-form-select-option
                v-for="(wine_type, i) in wine_types"
                :key="i"
                :value="wine_type.wine_type_name"
                >{{wine_type.wine_type_name}}</b-form-select-option
              >
            </b-form-select>
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label="Uva:"
            label-for="input-3"
          >
            <b-form-select v-model="form.wine_grape_name" class="mb-3" required>
              <b-form-select-option :value="null" disabled
                >Selecione uma uva</b-form-select-option
              >
              <b-form-select-option
                v-for="(wine_grape, i) in wine_grapes"
                :key="i"
                :value="wine_grape.wine_grape_name"
                >{{wine_grape.wine_grape_name}}</b-form-select-option
              >
            </b-form-select>
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label="Região"
            label-for="input-3"
          >
            <b-form-select v-model="form.wine_country_name" class="mb-3" required>
              <b-form-select-option :value="null" disabled
                >Selecione uma região</b-form-select-option
              >
              <b-form-select-option
                v-for="(wine_country, i) in wine_countries"
                :key="i"
                :value="wine_country.wine_country_name"
                >{{wine_country.wine_country_name}}</b-form-select-option
              >
            </b-form-select>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Nome do Item:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.wine_name"
              type="text"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Descrição"
            label-for="input-1"
          >
            <b-form-textarea
              id="textarea"
              v-model="form.wine_description"
              placeholder="Enter something..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>

          <b-form-group id="input-group-1" label="Preço" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.wine_price"
              type="number"
              step="any"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4">
            <b-form-checkbox
              id="checkbox-1"
              v-model="form.wine_promotional"
              name="checkbox-1"
              :value="1"
              :unchecked-value="0"
            >
              Item promocional
            </b-form-checkbox>
          </b-form-group>

          <b-form-group
            v-show="form.wine_promotional"
            id="input-group-1"
            label="Preço promocional"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.wine_promotional_price"
              type="number"
              step="any"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4">
            <b-form-checkbox
              id="checkbox-2"
              v-model="form.wine_available"
              name="checkbox-2"
              :value="1"
              :unchecked-value="0"
            >
              Item disponível
            </b-form-checkbox>
          </b-form-group>

          <b-form-group id="input-group-4">
            <b-form-checkbox
              id="checkbox-3"
              v-model="form.wine_featured"
              name="checkbox-3"
              :value="1"
              :unchecked-value="0"
            >
              Item em destaque
            </b-form-checkbox>
          </b-form-group>

          <b-button type="submit" block class="float-right" variant="primary"
            >Criar</b-button
          >
        </b-form>
        <!-- <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </b-card> -->
      </div>
    </b-modal>
  </div>
</template>

<script>
import ApiWines from "@/api/wines.js";

export default {
  name: "CreateWineModal",
  props: {
    wine_types: {},
    wine_grapes: {},
    wine_countries: {},
  },
  data() {
    return {
      form: {
        wine_name: "",
        wine_description: "",
        wine_price: 0,
        wine_promotional: 0,
        wine_promotional_price: 0,
        wine_featured: 0,
        wine_available: 0,
        wine_type_name: null,
        wine_grape_name: null,
        wine_country_name: null,
        wine_img: null
      },
    };
  },
  methods: {
      onSubmit(event){
        event.preventDefault();

        let formData = new FormData();

        formData.append("wine_name", this.form.wine_name);
        formData.append("wine_description", this.form.wine_description);
        formData.append("wine_price", this.form.wine_price);
        formData.append("wine_promotional", this.form.wine_promotional);
        formData.append("wine_promotional_price", this.form.wine_promotional_price);
        formData.append("wine_featured", this.form.wine_featured);
        formData.append("wine_available", this.form.wine_available);
        formData.append("wine_type_name", this.form.wine_type_name);
        formData.append("wine_grape_name", this.form.wine_grape_name);
        formData.append("wine_country_name", this.form.wine_country_name);

        formData.append("wine_img", this.$refs.file.files[0]);

        ApiWines.setWine(
            formData,
            (body)=>{
                alert(JSON.stringify(body));
            },
            (err)=>{
                alert(err);
            }
        );
      }
  },
};
</script>
