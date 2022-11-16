<script>

import { store } from './store.js'
export default {
  name: 'App',
  data() {
    return {
      store
    }
  },
  mounted() {
    this.store.callAPI()
  }
}




</script>

<template>
  <h1 class="text-center">it works</h1>
</template>

<style lang="scss" scoped>

</style>