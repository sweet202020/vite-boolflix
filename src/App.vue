

<script>

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';






export default {
  name: "App",
  components: {
    AppHeader,
    AppMain
  },

}




</script>

<template>

  <AppHeader />

  <!-- /#site_header -->
  <main id="site_main">
    <AppMain />
  </main>
  <!-- /#site_main -->
  <footer id="site_footer"></footer>

  <!-- /#site_footer -->
</template>

<style lang="scss" >
body {
  background-color: rgb(38, 37, 37);
}
</style>