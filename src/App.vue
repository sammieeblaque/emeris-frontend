<template>
  <section class="bg-red-500 min-h-screen pt-40">
    <Address />
    <swap-card />
  </section>
</template>

<script>
import Address from "./components/Address.vue";
import SwapCard from "./components/SwapCard.vue";
export default {
  name: "App",
  components: {
    Address,
    SwapCard,
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
