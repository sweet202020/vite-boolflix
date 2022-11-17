<!--  Milestone 2:
Trasformiamo la stringa statica della lingua in una vera e propria bandiera della
nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della
nazione ritornata dall’API (le flag non ci sono in FontAwesome). -->


<script>
import { store } from '../store.js'
import FlagList from './FlagList.vue';


export default {
    name: "AppMain",
    data() {
        return {
            store,
        };
    },
    components: { FlagList }
}
</script>

<template>
    <ul v-for="film in store.movies">
        <li>titolo: {{ film.title }}</li>
        <li>titolo originale: {{ film.original_title }}</li>
        <FlagList :original_language="film.original_language" />
        <li>voto: {{ film.vote_average }}</li>
    </ul>
</template>


<style lang="scss" scoped>

</style>