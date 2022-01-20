<template>
  <div class="LoginForm">
      <div class="text-center">
        <h4>Login Admin</h4>
      </div>
      <b-form @submit="onSubmit">
        <b-form-group id="input-group-1" label="CPF:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.cpf"
            type="text"
            placeholder="Insira seu cpf"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Senha:" label-for="input-2">
          <b-form-input
            id="input-2"
            type="password"
            v-model="form.password"
            placeholder="Insira sua senha"
            required
          ></b-form-input>
        </b-form-group>
        <b-button
          type="submit"
          id="submitButton"
          class="float-right"
          variant="primary"
          >Enviar</b-button
        >
      </b-form>
      <!-- <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card> -->
  </div>
</template>

<script>
import Api from "@/api/auth.js";
import { mapGetters } from "vuex";

export default {
  name: "LoginForm",
  computed: {
    // mistura os getters nos dados computatos com o operador spread
    ...mapGetters([
      "getToken",
      // ...
    ]),
  },
  data() {
    return {
      form: {
        cpf: "",
        password: "",
      }
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$store.dispatch("showLoading");
      Api.login(
        { cpf: this.form.cpf, password: this.form.password },
        (body) => {
          this.$store.dispatch("closeLoading");
          if (body.error == 0) {
            this.$store.dispatch("login", body.data).then(() => this.$router.push('/admin/'));
          } else {
            console.log("deu ruim");
          }

        },
        () => {
          this.isLoading = false;
          this.showErrorMessage = true;
          this.message = "Failed to logged-in.";
        }
      );
    },
  },
};
</script>

<style scoped>
.LoginForm {
  padding: 10px;
  background-color: white;
  border-radius: 2%;
}

#submitButton {
  margin-top: 10px;
}
</style>
