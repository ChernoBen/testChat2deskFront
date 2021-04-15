<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <div>
        <div v-if="show==false">
          <router-link to="/register">Register</router-link> |
          <router-link to="/login">Login</router-link>
        </div>

        <div v-else>
          <b-button pill variant="info" @click="logout">
           Sair
          </b-button>
           |
          <router-link to="/admin/users">Admin</router-link>
        </div>
        <!-----v-if------>
      </div>
    </div>

    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>
        <b-col
          ><!--center-->
          <router-view />
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  created() {
    this.show = localStorage.token? true : false;
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    logout() {
      console.log("----->",this.show)
      console.log(localStorage.getItem('token'));
      localStorage.removeItem('token');
      this.show = true;
      this.$router.go(0);
      this.$router.push({ name: "Login" });
     // this.$forceUpdate()
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
