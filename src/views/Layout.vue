<template>
  <section>
    <section class="flex justify-around items-center">
      <toggle-button />
      <Address />
    </section>
    <swap-card />
    <div
      v-if="isOpen1"
      class="bg-gray-600 absolute bg-opacity-50 inset-0 flex justify-center items-center"
    >
      <from-token-modal />
    </div>
    <div
      v-if="isOpen2"
      class="bg-gray-600 absolute bg-opacity-50 inset-0 flex justify-center items-center"
    >
      <to-token-modal />
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Address from "../components/Address.vue";
import SwapCard from "../components/SwapCard.vue";
import FromTokenModal from "../components/TokenModals/FromTokenModal.vue";
import ToTokenModal from "../components/TokenModals/ToTokenModal.vue";
import ToggleButton from "../components/ToggleButton.vue";
export default {
  name: "App",
  components: {
    Address,
    SwapCard,
    ToggleButton,
    FromTokenModal,
    ToTokenModal,
  },
  // data() {
  //   return {
  //     open: false,
  //   };
  // },
  beforeMount() {
    this.$store.dispatch("initTheme");
  },
  computed: {
    ...mapGetters({ theme: "getTheme" }),
    ...mapGetters("tokens", ["isOpen1", "isOpen2"]),
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

<style></style>
