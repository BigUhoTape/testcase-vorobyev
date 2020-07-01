<template>
    <div class="editView">
        <router-link
                to="/"
                tag="button"
                class="editView__home"
        >Home</router-link>
        <div class="editView-info">
            <p class="editView-info__id">{{ +$route.params.id + 1 }}</p>
            <input
                    type="text"
                    v-model="todo.name"
                    placeholder="Enter name"
                    class="editView-info__input"
            >
            <button
                    @click="editTodo"
                    class="editView-info__save"
            >Save</button>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
      name: 'EditView',
      methods: {
        ...mapActions([
          'EDIT_TODO'
        ]),
        editTodo() {
          this.EDIT_TODO({ id: this.$route.params.id, todo: this.todo });
        }
      },
      computed: {
        ...mapGetters([
          'TODO_BY_ID'
        ]),
        todo() {
          return this.TODO_BY_ID(this.$route.params.id);
        }
      }
    }
</script>

<style lang="less" scoped>
    .editView {
        display: flex;
        flex-direction: column;

        &__home {
            margin-top: 50px;
            margin-bottom: 50px;
            width: 100px;
            height: 50px;
            background-color: #fff;
            cursor: pointer;
            transition: .4s;

            &:hover {
                background-color: #000;
                color: #fff;
                transition: .4s;
            }
        }

        &-info {
            display: flex;
            justify-content: space-around;
            align-items: center;

            &__input {
                height: 30px;
            }

            &__save {
                height: 30px;
                width: 50px;
                background-color: #fff;
                transition: .4s;
                border: 1px solid black;

                &:hover {
                    transition: .4s;
                    background-color: #000;
                    color: #fff;
                }
            }
        }
    }
</style>
