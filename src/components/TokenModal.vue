<template>
  <section
    class="mt-20 ml-20 bg-gray-200 shadow-xl rounded-2xl w-1/4 h-1/4 p-4"
  >
    <section class="flex justify-between items-center">
      <div>
        <h2 class="tex-2xl font-bold">Select a token</h2>
      </div>
      <div>
        <span><i class="fas fa-times cursor-pointer text-2xl"></i></span>
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
      <div v-for="token in tokens" :key="token" class="text-left">
        <p
          class="p-2 text-sm font-semibold cursor-pointer rounded-xl hover:bg-white"
        >
          {{ token }}
        </p>
      </div>
    </section>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["tokens", "tokens"]),
  },
};
</script>
