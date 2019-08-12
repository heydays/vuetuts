<template>
  <div id="app">
    <navigation/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 80px;
    color: #2c3e50;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 15px;
    }
  }
</style>
