import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    books:[],
  },
  mutations: {
    getBooksData(state, response){
      state.books.push(response.data)
    }
  },
  actions: {
    getBooksData({ commit }){
      axios.get('/api/v1/book/list/?format=json')
      .then((response) => commit('getBooksData', response))
    }
  },
  modules: {
  },
  })
