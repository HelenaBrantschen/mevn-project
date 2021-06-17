<template>
  <v-app id="inspire">

    <v-app-bar app>
      <v-app-bar-nav-icon @click="toggleView"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <!-- Main-->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
  }),methods:{
toggleView() {
  console.log(this.$router)
  if ( this.$router.currentRoute.path == "/"){
    this.$router.push("/about")
  }else{
        this.$router.push("/")
  }
}
  },
};
</script>
<style scoped>
::v-deep main .v-main {
  padding-top:0px!important;
}
</style>