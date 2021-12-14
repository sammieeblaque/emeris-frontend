<template>
  <section class="min-h-screen bg-white dark:bg-gray-900">
    <Layout />
  </section>
</template>

<script>
import Layout from "./views/Layout.vue";
export default {
  name: "App",
  components: {
    Layout,
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
  margin: 0;
  padding: 0;
}

/* body {
  background-color: #d7d7d74f;
} */
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}
</style>
