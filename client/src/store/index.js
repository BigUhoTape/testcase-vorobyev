import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    CHANGE_DONE(state, data) {
      state.todos.find(item => item._id === data._id).done = data.done;
    },
    DELETE_TODO(state, id) {
      state.todos = state.todos.filter(todo => todo._id !== id);
    },
    EDIT_TODO(state, newTodo) {
      state.todos[newTodo.id].name = newTodo.name;
    },
    ADD_TODO(state, newTodo) {
      state.todos.push(newTodo);
    },
    ADD_TODOS_TO_STATE(state, todos) {
      state.todos = todos;
    }
  },
  actions: {
    CHANGE_DONE({commit}, item) {
      return axios.put('http://localhost:8081/api/todos', item)
        .then(() => commit('CHANGE_DONE', item))
    },
    DELETE_TODO({commit}, id) {
      return axios.delete('http://localhost:8081/api/todos/' + id)
        .then(() => commit('DELETE_TODO', id))
    },
    EDIT_TODO({commit}, newTodo) {
      const dataToServer = {
        _id: newTodo._id,
        name: newTodo.name
      };
      return axios.put('http://localhost:8081/api/todos', dataToServer)
        .then(() => commit('EDIT_TODO', newTodo));
    },
    ADD_TODO({commit}, name) {
      return axios.post('http://localhost:8081/api/todos', {name})
        .then(response => commit('ADD_TODO', response.data.todo));
    },
    FETCH_TODOS({commit}) {
      return axios.get('http://localhost:8081/api/todos')
        .then(response => commit('ADD_TODOS_TO_STATE', response.data.todos))
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
