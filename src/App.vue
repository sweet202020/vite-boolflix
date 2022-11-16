<script>
import axios from 'axios'
import { store } from './store.js'
export default {
  name: 'App',
  data() {
    return {
      store
    }
  },
  mounted() {

    const config = {
      method: 'get',
      url: store.API_URL,
      params: {
        api_key: store.params.api_key,
        query: store.params.query
      }
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
}



</script>

<template>
  <h1 class="text-center">it works</h1>
</template>

<style lang="scss" scoped>

</style>