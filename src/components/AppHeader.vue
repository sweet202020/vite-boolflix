<!-- Milestone 1:
Creare un layout base con una searchbar (una input e un button) in cui possiamo
scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il
bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni
film trovato:
1. Titolo
2. Titolo Originale
3. Lingua
4. Voto -->

<script>
import { store } from '../store.js'
export default {
    name: 'AppHeader',
    data() {
        return {
            store

        }
    }, methods: {
        buttonSearch() {
            console.log(store.params.query);
        }
    }
}
</script>
<template>
    <header id="site_header">
        <span>boolflix</span>
        <input placeholder="cerca un film" v-model="store.params.query" type="text">
        <button @click="buttonSearch">search</button>
        <ul v-for="film in store.movie">
            <li>{{ film.title }}</li>
        </ul>
    </header>
</template>