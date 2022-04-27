<template>
  <calcu/>
</template>

<script>
import calcuVue from "./components/calcu.vue";
export default {
  name: "App",
  components: {
    calcu: calcuVue,
  },
};
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
