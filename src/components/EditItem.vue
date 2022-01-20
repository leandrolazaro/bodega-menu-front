<template>
  <div>
    <b-modal
      ref="modalEditItem"
      id="modalEditItem"
      title="Editar Item"
      hide-footer
    >
      <div>
        <b-form @submit="onSubmit">
          <b-form-group
            id="input-group-3"
            label="Categoria:"
            label-for="input-3"
          >
            <b-form-file
              accept="image/x-png,image/gif,image/jpeg"
              v-model="form.item_img_src"
              ref="file"
              :state="Boolean(form.item_img_src)"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
            ></b-form-file>
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label="Categoria:"
            label-for="input-3"
          >
            <b-form-select v-model="form.category_id" class="mb-3" required>
              <b-form-select-option :value="null" disabled
                >Selecione uma categoria</b-form-select-option
              >
              <b-form-select-option
                v-for="category in categories"
                :key="category.category_id"
                :value="Number(category.category_id)"
                >{{ category.category_name }}</b-form-select-option
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
              v-model="form.item_name"
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
              v-model="form.item_description"
              placeholder="Enter something..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>

          <b-form-group id="input-group-1" label="Preço" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.price"
              type="number"
              step="any"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4">
            <b-form-checkbox
              id="checkbox-1"
              v-model="form.promocional_item"
              name="checkbox-1"
              :value="1"
              :unchecked-value="0"
            >
              Item promocional
            </b-form-checkbox>
          </b-form-group>

          <b-form-group
            v-show="form.promocional_item"
            id="input-group-1"
            label="Preço promocional"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.promocional_price"
              type="number" step="any" 
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4">
            <b-form-checkbox
              id="checkbox-2"
              v-model="form.available"
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
              v-model="form.featured_item"
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
        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
      </div>
    </b-modal>
  </div>
</template>

<script>
import ApiItens from "@/api/itens.js";
// import ApiCategories from "@/api/categories.js";

export default {
  name: "CreateItemModal",
  props: {
    item: {},
    categories: {},
  },
  created: function () {
    this.$parent.$on("updateItemData", this.setData);
  },
  data() {
    return {
      form: {
        item_name: "",
        item_description: "",
        price: 0,
        promocional_item: 0,
        promocional_price: 0,
        featured_item: 0,
        category_id: null,
        available: 0,
        item_img_src: null,
      },
    };
  },
  methods: {
    setData: function (value) {
      this.form = value;
    },
    onSubmit(event) {
      this.$store.dispatch("showLoading");

      let formData = new FormData();

      formData.append("item_img_src", this.$refs.file.files[0]);

      formData.append("item_name", this.form.item_name);
      formData.append("item_description", this.form.item_description);
      formData.append("price", this.form.price);
      formData.append("promocional_item", this.form.promocional_item);
      formData.append("promocional_price", this.form.promocional_price);
      formData.append("featured_item", this.form.featured_item);
      formData.append("category_id", this.form.category_id);
      formData.append("available", this.form.available);
      formData.append("item_id", this.form.item_id);

      event.preventDefault();
      ApiItens.editItem(
        formData,
        () => {
          // alert(JSON.stringify(body));
          this.$store.dispatch("closeLoading");
          this.$store.dispatch("showSucessMessage").then(() => {});
          this.$emit("reload");
          this.$refs["modalEditItem"].hide();
        },
        (err) => {
          alert(JSON.stringify(err));
        }
      );
    },
  },
};
</script>
