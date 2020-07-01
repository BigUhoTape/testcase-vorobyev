<template>
    <div :class="isDoneClass">
        <p class="todo__name"
            @click="CHANGE_DONE(todo.id)"
        >{{ todo.name }}</p>
        <div class="buttons">
            <router-link
                    class="buttons__button buttons__button_edit"
                    :to="'/todo/' + index"
                    tag="button"
            >Edit</router-link>
            <button
                    class="buttons__button buttons__button_delete"
                    @click="DELETE_TODO(todo.id)"
            >Delete</button>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
      name: 'Todo',
      props: {
        todo: {
          type: Object,
          default() {
            return {}
          }
        },
        index: Number
      },
      methods: {
        ...mapActions([
            'CHANGE_DONE',
          'DELETE_TODO'
        ])
      },
      computed: {
        isDoneClass() {
          return this.todo.done ? 'todo done': 'todo';
        }
      }
    }
</script>

<style lang="less" scoped>
    .done {
        background-color: #27AE60;
        text-decoration: line-through;
    }
    .todo {
        border: 1px solid gray;
        border-radius: 5px;
        padding: 10px 20px;
        width: 300px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;

        &__name {
            margin: 0;
            cursor: pointer;
        }
    }
    .buttons {
        &__button {
            font-size: 15px;
            border: none;
            margin-left: 5px;
            padding: 10px 10px;
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none;

            &_edit {
                background-color: yellow;
            }

            &_delete {
                background-color: red;
            }
        }
    }
</style>
