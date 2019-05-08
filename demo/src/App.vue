<template>
  <div id="app">
    
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import cnav from "../src/components/nav"
import Footer from "../src/components/Footer"
import 'animate.css';
export default {
  name: 'App',
  components:{
    cnav,Footer,
  },
  mounted(){

  }
}
</script>

<style lang="scss">
  @import "assets/style/common";
</style>
