

<script>

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store.js'
export default {
  name: "App",
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    };
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

<style lang="scss" scoped>

</style>