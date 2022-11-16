

<script>

import AppHeader from './components/AppHeader.vue';
import { store } from './store.js'
export default {
  name: "App",
  components: {
    AppHeader
  },
  data() {
    return {
      store
    };
  },
  mounted() {
    this.store.callAPI();
  },
  components: { AppHeader }
}




</script>

<template>

  <AppHeader />

  <!-- /#site_header -->
  <main id="site_main"></main>
  <!-- /#site_main -->
  <footer id="site_footer"></footer>
  <!-- /#site_footer -->
</template>

<style lang="scss" scoped>

</style>