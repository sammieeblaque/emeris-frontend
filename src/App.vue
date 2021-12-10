<template>
  <section class="bg-white dark:bg-black min-h-screen">
    <!-- <toggle-button /> -->
    <token-modal />
    <!-- <Address />
    <swap-card /> -->
  </section>
</template>

<script>
import { mapGetters } from "vuex";
// import Address from "./components/Address.vue";
// import SwapCard from "./components/SwapCard.vue";
// import ToggleButton from "./components/ToggleButton.vue";
import TokenModal from "./components/TokenModal.vue";
export default {
  name: "App",
  components: {
    // Address,
    // SwapCard,
    // ToggleButton,
    TokenModal,
  },
  beforeMount() {
    this.$store.dispatch("initTheme");
  },
  computed: {
    ...mapGetters({ theme: "getTheme" }),
  },
  watch: {
    theme(newTheme) {
      newTheme === "light"
        ? document.querySelector("html").classList.remove("dark")
        : document.querySelector("html").classList.add("dark");
    },
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
