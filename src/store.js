/* Milestone 0:
Progettare la struttura del global state sulla linea degli esercizi svolti nei giorni
precedenti. */

import { reactive } from 'vue'
export const store = reactive({
    API_URL: 'https://api.themoviedb.org/3/search/movie?',
    params: {
        api_key: '1320ddff3038649a593a262b9429c7d3',
        query: 'Matrix'
    }
})