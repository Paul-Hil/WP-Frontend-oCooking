<template>
  <div id="app">
    <ClickCounter label="J'aime le php"/>
    <ClickCounter label="J'aime le javascript"/>
    <ClickCounter label="J'aime le css"/>
    <ClickCounter label="J'aime le SQL"/>
    <ClickCounter label="J'aime parcel"/>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import ClickCounter from './components/ClickCounter.vue';

export default {
  props: {
  },
  name: 'App',
  components: {
    ClickCounter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
