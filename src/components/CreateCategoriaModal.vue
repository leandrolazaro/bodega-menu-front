<template>
  <div>
    <b-modal ref="modaldoido" id="modal-1" title="Nova Categoria" hide-footer>
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
            >Criar</b-button
          >
        </b-form>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Api from "@/api/categories.js";
import { mapGetters } from 'vuex'

export default {
  name: "CreateCatgoriaModal",
  data() {
    return {
      form: {
        category_name: "",
      },
      show: true,
    };
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'getToken',
      // ...
    ])
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.getToken));
      Api.setCategory(
        {token: this.getToken, category_name: this.form.category_name},
        (body) => {
          alert(JSON.stringify(body))
        },
        () => {
          alert("Error");
        }
      );
      this.$refs["modaldoido"].hide();
    },
  },
};
</script>
