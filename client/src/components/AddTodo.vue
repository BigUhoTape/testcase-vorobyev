<template>
    <div class="addTodo">
        <input
                type="text"
                placeholder="Enter new Todo"
                class="addTodo__input"
                v-model="name"
        >
        <button
                class="addTodo__btn"
                @click="addTodo"
        >Add</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
      name: 'AddTodo',
      data() {
        return {
          name: ''
        }
      },
      methods: {
        ...mapActions([
          'ADD_TODO'
        ]),
        addTodo() {
          this.ADD_TODO(this.name);
          this.name = '';
        }
      }
    }
</script>

<style lang="less" scoped>
    .addTodo {
        width: 340px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &__input {
            width: 75%;
            height: 30px;
        }

        &__btn {
            width: 20%;
            height: 30px;
            background-color: #fff;
            border: 1px solid black;
            transition: .4s;
            cursor: pointer;

            &:hover {
                background-color: #000;
                color: #fff;
                transition: .4s;
            }
        }
    }
</style>
