import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, name: 'Drink', done: false },
      { id: 2, name: 'Sleep', done: true },
      { id: 3, name: 'Eat', done: true }
    ]
  },
  mutations: {
    CHANGE_DONE(state, id) {
      const done = state.todos.find(todo => todo.id === id).done;
      state.todos.find(todo => todo.id === id).done = !done;
    },
    DELETE_TODO(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
    EDIT_TODO(state, newTodo) {
      state.todos[newTodo.id] = newTodo.todo
    },
    ADD_TODO(state, newTodo) {
      state.todos.push(newTodo);
    }
  },
  actions: {
    CHANGE_DONE({commit}, id) {
      commit('CHANGE_DONE', id);
    },
    DELETE_TODO({commit}, id) {
      commit('DELETE_TODO', id);
    },
    EDIT_TODO({commit}, newTodo) {
      commit('EDIT_TODO', newTodo);
    },
    ADD_TODO({commit}, newTodo) {
      commit('ADD_TODO', newTodo);
    }
  },
  getters: {
    TODOS(state) {
      return state.todos;
    },
    TODO_BY_ID: (state) => (id) => {
      return state.todos[id]
    }
  }
});

export default store;
