<template>
    <div class="mainView">
        <h1>TodoList</h1>
        <TodoList/>
        <AddTodo/>
    </div>
</template>

<script>
    import TodoList from "./TodoList";
    import AddTodo from "./AddTodo";

    export default {
      name: 'MainView',
      components: {
        TodoList,
        AddTodo
      }
    }
</script>

<style lang="less" scoped>
    .mainView {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
