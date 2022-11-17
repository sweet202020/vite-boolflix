<script>
import { store } from '../store.js';
export default {
    name: 'SearchBox',
    data() {
        return {
            store
        }
    }

}
</script>
<template>
    <span>boolflix</span>
    <input placeholder="cerca un film" v-model="store.params.query" type="text">
    <button @click="store.callAPI">search</button>

</template>

<style lang="scss" scoped>

</style>