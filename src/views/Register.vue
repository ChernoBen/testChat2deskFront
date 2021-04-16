<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col></b-col>
      <b-col
        ><!--center-->
        <div>
          <b-form>
            <b-form-group
              id="input-group-1"
              label="Endereço de E-mail:"
              label-for="input-1"
              
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Insira um email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Seu Nome:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.name"
                placeholder="Insira um nome"
                required
              ></b-form-input>
            </b-form-group>

            <label for="text-password">Senha:</label>
            <b-form-input
              v-model="form.password"
              type="password"
              id="text-password"
              aria-describedby="password-help-block"
            ></b-form-input>
            <b-form-text id="password-help-block">
              A senha deve possuir mais que 6 caracteres.
            </b-form-text>
            <b-form-group
              id="input-group-2"
              label="CPF/CNPJ:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.documento"
                placeholder="CPF/CNPJ"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label-for="input-2">
              <label for="example-datepicker">Data de nascimento:</label>
              <b-form-datepicker
                id="example-datepicker"
                v-model="form.birth"
                class="mb-2"
              ></b-form-datepicker>
            </b-form-group>

            <b-button variant="primary" @click="register">Cadastrar</b-button>
          </b-form>
        </div>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      url: "http://localhost:3000/signin",
      form: {
        email: "",
        name: "",
        documento: "",
        password: "",
        birth: "2000-01-01",
      },
      error: null,
    };
  },
  methods: {
    register() {
      axios
        .post(this.url, {
          name: this.form.name,
          email: this.form.email,
          password: this.form.password,
          birth: this.form.birth,
          documento: this.form.documento,
        })
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "Login" });
        })
        .catch((error) => {
          let msgErro = error.response.data.message;
          this.error = msgErro;
          alert(JSON.stringify(this.error));
        });
    },
    // onReset(event) {
    //   event.preventDefault()
    //   // Reset our form values
    //   this.form.email = ''
    //   this.form.name = ''
    //   this.form.food = null
    //   this.form.checked = []
    //   // Trick to reset/clear native browser form validation state
    //   this.show = false
    //   this.$nextTick(() => {
    //     this.show = true
    //   })
    // }
  },
};
</script>
