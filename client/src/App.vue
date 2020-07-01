<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
      methods: {
        ...mapActions([
          'FETCH_TODOS'
        ])
      },
      mounted() {
        this.FETCH_TODOS();
      }
    }
</script>

<style lang="less">
    .app {
        width: 800px;
        margin: 0 auto;
    }
</style>
