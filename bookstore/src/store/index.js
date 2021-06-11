import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    books:[],
    book:[],
    count:1,
  },
  mutations: {
    getBooksData(state, response){
      state.books.push(response.data)
    },
    getBookData(state, response){
      state.book.pop()
      state.book.push(response.data)
    },
    getCount(state, count){
      state.count = count
      console.log(state.count)
    },
  },
  actions: {
    getBooksData({ commit }){
      axios.get('/api/v1/book/list/?format=json')
      .then((response) => commit('getBooksData', response))
    },
    getBookData({ commit }, id){
      axios.get(`/api/v1/book/${id}/?format=json`)
      .then(response => commit('getBookData', response))
    }
  },
  modules: {
  },
  })
