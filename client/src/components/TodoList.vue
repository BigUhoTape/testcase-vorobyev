<template>
    <div class="todoList">
        <p v-if="!TODOS.length">No Todo yet!!!</p>
        <Todo v-for="(todo, i) in TODOS"
              :key="i"
              :todo="todo"
              :index="i"
        />
    </div>
</template>

<script>
    import Todo from "./Todo";
    import { mapGetters } from 'vuex'

    export default {
      name: 'TodoList',
      components: {
        Todo
      },
      computed: {
        ...mapGetters([
          'TODOS'
        ])
      }
    }
</script>

<style lang="less" scoped>
</style>
