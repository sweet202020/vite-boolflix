<!--  Milestone 2:
Trasformiamo la stringa statica della lingua in una vera e propria bandiera della
nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della
nazione ritornata dall’API (le flag non ci sono in FontAwesome). -->



<!-- Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca
dovremo prendere sia i film che corrispondono alla query, sia le serie tv, stando
attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di
risposta diversi, simili ma non sempre identici)
Qui un esempio di chiamata per le serie tv:
https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=s
crubs -->



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
        <li>titolo: {{ film.title }} {{ film.name }}</li>
        <li>titolo originale: {{ film.original_title }} {{ film.original_name }}</li>
        <FlagList :original_language="film.original_language" />
        <li>voto: {{ film.vote_average }}</li>
    </ul>
</template>


<style lang="scss" scoped>

</style>