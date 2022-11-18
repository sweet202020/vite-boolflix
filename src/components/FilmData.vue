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

    <div class="col">
        <img class="poster" :src="store.imagePath + film.poster_path" alt="">
        <ul>
            <li>TITOLO: {{ film.title }} {{ film.name }}</li>
            <li>TITOLO ORIGINALE: {{ film.original_title }} {{ film.original_name }}</li>
            <FlagList :original_language="film.original_language" />
            <li>
                <i class="fa-star" v-for="star in 5" :class="star <= vote ? 'fa-solid' : 'fa-regular'"></i>
            </li>
            <li>TRAMA: {{ film.overview }}</li>
        </ul>
    </div>

</template>

<style lang="scss" scoped>
i.fa-solid {
    color: gold;
}

img {
    height: 500px;
    object-fit: contain;
    max-width: 100%;
    background-color: black;
    margin: 1rem 0;
}

.col {
    position: relative;

}


ul {
    list-style: none;
    display: none;
    position: absolute;
    max-height: 400px;
    overflow-y: auto;
    top: 15%;
    left: 0;
    padding: 0 1rem;


    &:hover {
        display: block;

    }
}

li {
    color: white;
}

.col:hover ul {
    display: block;
}


.col:hover img {
    opacity: 0.2;
}
</style>