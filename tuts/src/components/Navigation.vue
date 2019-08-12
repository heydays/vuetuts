<template>
  <b-navbar type="is-light" fixed-top="true">
    <template slot="brand">
      <b-navbar-item>
        <img src="./../assets/logo.png" alt="vuejs logo">
      </b-navbar-item>
    </template>
    <template slot="start"  v-for="menuItem in menuItems">
      <b-navbar-item v-bind="menuItem" :key="menuItem.name">
        <router-link :to="menuItem.path">
          {{ menuItem.name }}
        </router-link>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
  export default {
    name: 'navigation',
    data() {
      return {
        menuItems: [
          {name: 'Home', path: '/home'},
          {name: 'Bindings', path: '/bindings'},
          {name: 'Two-Way-Binding', path: '/two-way-bindings'}
        ]
      }
    }
  }
</script>
<style lang="scss">

</style>