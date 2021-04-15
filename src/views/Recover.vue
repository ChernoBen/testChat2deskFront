<template>
    <div>
  <div>
    <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      content-cols-sm
      content-cols-lg="7"
      description="Insira seu e-mail aqui."
      label="Entre com seu email "
      label-for="input-horizontal"
    >
      <b-form-input v-model="email" id="input-horizontal"></b-form-input>
    </b-form-group>
  </div>
  <div><b-button variant="outline-primary" @click="recoverPass">Button</b-button></div>
</div>
</template>
<script>
import axios from 'axios';

export default ({

    data(){
        return {

            url:"http://localhost:8686/recover",
            email:""

        }
    
    },
    methods:{
        recoverPass(){
            axios.post(this.url,{email:this.email}).then(response=>{
                console.log(response)
                alert(JSON.stringify(`Um codigo de recuperação foi enviado para o email:${this.email}`));
                this.$router.push({ name: "Code" });
            }).catch(error=>{
                console.log(error)
                alert(JSON.stringify(error));
            })
        }
    }
})
</script>
