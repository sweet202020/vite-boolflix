<script>
import { store } from '../store.js'
import FlagList from './FlagList.vue';
export default {
    name: 'FilmData',
    components: {
        FlagList
    }, props: {
        film: Object
    },
    data() {
        return {
            store
        }
    }, computed: {
        vote() {
            return Math.ceil(this.film.vote_average / 2)
        }
    }
}
</script>

<template>
    <li>titolo: {{ film.title }} {{ film.name }}</li>
    <li>titolo originale: {{ film.original_title }} {{ film.original_name }}</li>
    <FlagList :original_language="film.original_language" />
    <li>voto: {{ vote }}</li>
    <li>
        <i class="fa-star" v-for="star in 5" :class="star <= vote ? 'fa-solid' : 'fa-regular'"></i>
    </li>
    <li><img :src="store.imagePath + film.poster_path" alt=""></li>
</template>

<style lang="scss" scoped>
i.fa-solid {
    color: gold;
}
</style>