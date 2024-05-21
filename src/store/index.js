import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      todos: [
        { id: 1, title: 'todo1', done: true },
        { id: 2, title: 'todo2', done: true },
        { id: 3, title: 'todo3', done: true }
      ]
    }
  },
  getters: {
    todosCount(state) {
      return state.todos.length
    },
    doneTodoCount(state) {
      return state.todos.filter((todo) => todo.done).length
    },
    notDoneTodosCounnt(state) {
      return state.todos.filter((todo) => !todo.done).length
    }
  },
  mutations: {
    add(state, item) {
      state.todos.push(item)
    },
    remove(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id)
    },
    doen(state, id) {
      state.todos.filter((todo) => todo.id === id)[0].done = true
    }
  },
  actions: {
    add({ commit }, item) {
      commit('add', item)
    }
  },
  modules: {}
})
