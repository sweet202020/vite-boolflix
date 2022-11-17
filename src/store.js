/* Milestone 0:
Progettare la struttura del global state sulla linea degli esercizi svolti nei giorni
precedenti. */
import axios from 'axios'
import { reactive } from 'vue'
export const store = reactive({
    movies: [],
    API_URL: 'https://api.themoviedb.org/3/search/movie',
    params: {
        api_key: '1320ddff3038649a593a262b9429c7d3',
        query: "",
    },
    error: "",
    callAPI() {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=1320ddff3038649a593a262b9429c7d3&query=' + store.params.query)
            .then(function (response) {
                console.log(response.data.results);
                store.movies = response.data.results
                store.params.query = ""

            })
            .catch(function (error) {
                console.error(error.message);
            });
    }

})

