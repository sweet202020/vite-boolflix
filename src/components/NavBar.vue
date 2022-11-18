<script>
import { store } from '../store.js';
export default {
    name: 'NavBar',
    data() {
        return {
            store
        }
    }, methods: {
        clickSearch() {

        }
    }

}
</script>
<template>
    <div class="menu d-flex justify-content-between">

        <nav class="nav ">
            <img src="../assets/img/Logonetflix.png" alt="">
            <a class="active" href="#">Home</a>
            <a href="#">Film</a>
            <a href="#">Serie Tv</a>
            <a href="#">Aggiunti di recente</a>
            <a href="#">La Mia Lista</a>
        </nav>
        <div>
            <i class="fa-solid fa-magnifying-glass pe-3" @click="clickSearch"></i>
            <input placeholder="cerca un film" @keyup.enter="store.callAPI" v-model="store.params.query" type="text">
            <button @click="store.callAPI">search</button>
        </div>
    </div>

</template>

<style lang="scss" scoped>
img {
    width: 100px;
}

nav {
    a {
        color: gray;
        text-decoration: none;
        padding: 0 1rem;

        &:hover {
            color: white;
        }
    }

    a.active {
        color: white;
    }

}

i {
    color: white;
}
</style>