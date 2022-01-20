<template>
  <div>
    <b-modal
      ref="modalEditCategory"
      id="modalEditCategory"
      title="Editar Categoria"
      hide-footer
    >
      <div>
        <b-form @submit="onSubmit">
          <b-form-group
            id="input-group-1"
            label="Nome da Categoria:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.category_name"
              type="text"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" class="float-right" variant="primary"
            >Editar</b-button
          >
        </b-form>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Api from "@/api/categories.js";
import { mapGetters } from "vuex";

export default {
  name: "EditCategory",
  data() {
    return {
      form: {
        category_name: "",
        category_id: "",
      },
      show: true,
    };
  },
  created: function () {
    this.$parent.$on("updateCategoryData", this.setData);
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      "getToken",
      // ...
    ]),
  },
  methods: {
    onSubmit(event) {
      this.$store.dispatch("showLoading");
      event.preventDefault();
      Api.editCategory(
        {
          token: this.getToken,
          category_name: this.form.category_name,
          category_id: this.form.category_id,
        },
        () => {
          this.$store.dispatch("closeLoading");
          this.$store.dispatch("showSucessMessage").then(() => {});
          this.$emit("reload");
          this.$refs["modalEditCategory"].hide();
        },
        (err) => {
          alert(JSON.stringify(err));
        }
      );
    },
    setData: function (value) {
      this.form = value;
    },
  },
};
</script>
