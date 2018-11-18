<template>
  <div id="app">
<b-navbar toggleable="sm" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="/">Start</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item to="/kundenservice">Kundenservice</b-nav-item>
      <b-nav-item to="/vertrieb">Vertrieb</b-nav-item>
      <b-nav-item to="/technik">Technik</b-nav-item>
      <b-nav-item to="/ea">EA</b-nav-item>
      
    </b-navbar-nav>

    

  </b-collapse>
</b-navbar>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
