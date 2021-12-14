<template>
  <section class="bg-gray-200 shadow-xl rounded-2xl w-1/4 h-auto p-4">
    <section class="flex justify-between items-center">
      <div>
        <h2 class="tex-2xl font-bold">Select a token</h2>
      </div>
      <div>
        <span @click="closeToModal"
          ><i class="fas fa-times cursor-pointer text-2xl"></i
        ></span>
      </div>
    </section>
    <section class="mt-3">
      <input
        type="text"
        placeholder="Search name"
        class="w-full p-2 rounded-xl focus:ring-2 focus:ring-gray-600"
      />
    </section>
    <section class="mt-2">
      <div class="text-left">
        <ol>
          <li
            v-for="token in tokens"
            :key="token"
            @click="selectToken(token)"
            class="p-2 text-sm font-semibold cursor-pointer rounded-xl hover:bg-white"
          >
            {{ token }}
          </li>
        </ol>
      </div>
    </section>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      token: null,
    };
  },
  computed: {
    ...mapGetters("tokens", ["tokens"]),
  },
  methods: {
    closeModal() {
      this.$store.dispatch("tokens/closeToModal");
    },
    selectToken(token) {
      this.$store.dispatch("tokens/updateToken2", token);
    },
  },
};
</script>
