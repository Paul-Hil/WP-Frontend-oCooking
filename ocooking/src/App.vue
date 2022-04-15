<template>
  <div id="app">

    <oCookingHeader />

    <router-view/>

    <oCookingFooter />
  </div>
</template>

<script>
import OCookingHeader from './components/OCookingHeader.vue';
import OCookingFooter from './components/OCookingFooter.vue';
export default ({
  name: 'App',
  components: {
    OCookingHeader,
    OCookingFooter
  }
})
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>