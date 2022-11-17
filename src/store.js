/* Milestone 0:
Progettare la struttura del global state sulla linea degli esercizi svolti nei giorni
precedenti. */
import axios from 'axios'
import { reactive } from 'vue'
export const store = reactive({
    movies: [],
    tvSeries: [],
    API_URL: 'https://api.themoviedb.org/3/search/movie?',
    API_URL_tv: 'https://api.themoviedb.org/3/search/tv?',
    params: {
        api_key: '1320ddff3038649a593a262b9429c7d3',
        query: "",
    },
    error: "",
    callAPI() {
        Promise.all([axios.get(store.API_URL_tv + 'api_key=' + store.params.api_key + '&query=' + store.params.query),
        axios.get(store.API_URL + 'api_key=' + store.params.api_key + '&query=' + store.params.query)]).then(response => {
            console.log(response[0].data.results);
            console.log(response[1].data.results);
            store.movies = response[1].data.results.concat(response[0].data.results)

            store.params.query = ""


        })


            .catch(function (error) {
                console.error(error.message);
            });
    },


})

