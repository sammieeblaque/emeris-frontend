<template>
  <section
    class="mt-20 bg-gray-200 shadow-xl rounded-2xl w-1/3 h-full p-4 mx-auto"
  >
    <h1 class="text-left text-2xl font-bold">Swap</h1>
    <!-- Top section FROM -->
    <section
      class="mt-5 flex justify-between items-center p-6 bg-white rounded-2xl"
    >
      <div
        @click="toggleFromTokenModal"
        class="flex justify-between items-center bg-gray-200 rounded-xl shadow-xl px-4 py-2 cursor-pointer hover:bg-gray-300"
      >
        <div class="text-black font-semibold">{{ token1 }}</div>
        <div><chevron-down-icon class="h-6 pl-3" /></div>
      </div>
      <div class="pr-2">
        <input
          type="text"
          placeholder="0.0"
          class="text-right text-2xl w-full"
          v-model="amount"
        />
      </div>
    </section>
    <div class="text-red-700 font-normal text-xs pr-2 text-right">
      {{ amount > balance && amount.length >= 1 ? "Balance Insufficient" : "" }}
    </div>
    <div>
      <switch-vertical-icon
        @click="swapTokens"
        class="h-8 m-auto text-white text-center -mb-4 border-gray-400 border-2 rounded-xl cursor-pointer"
      />
    </div>
    <!-- To Section -->
    <section
      class="mt-5 flex justify-between items-center p-6 bg-white rounded-2xl"
    >
      <div
        class="flex justify-between items-center bg-gray-200 rounded-xl shadow-xl px-4 py-2 cursor-pointer hover:bg-gray-300"
        @click="toggleToTokenModal"
      >
        <div class="text-black font-semibold">{{ token2 }}</div>
        <div><chevron-down-icon class="h-6 pl-3" /></div>
      </div>
      <div class="pr-2">
        <!-- <input type="text" placeholder="0.0" class="text-right text-2xl" /> -->
        <span class="text-2xl text-gray-400">{{
          info && amount >= 1 ? displayValue : "0.00"
        }}</span>
      </div>
    </section>
    <section class="my-4">
      <button
        class="bg-white hover:bg-gray-300 cursor-pointer rounded-2xl shadow-xl w-full p-4 text-black font-bold"
      >
        PERFORM SWAP
      </button>
    </section>
    <section class="text-red-700">
      {{
        info === undefined && amount.length >= 1 ? "Does not exist in pool" : ""
      }}
    </section>
  </section>
</template>
<script>
import { ChevronDownIcon } from "@heroicons/vue/solid";
import { SwitchVerticalIcon } from "@heroicons/vue/solid";
// import { pools } from "../data/pools.json";
import { mapGetters } from "vuex";
export default {
  components: {
    ChevronDownIcon,
    SwitchVerticalIcon,
  },
  data() {
    return {
      amount: "",
      info: null,
      error: "",
      displayValue: null,
      balance: null,
    };
  },
  watch: {
    amount() {
      if (this.amount.length >= 1) {
        this.checkPools();
        this.checkBalance();
      }
    },
  },
  computed: {
    ...mapGetters("tokens", ["token1", "token2", "pools", "balances"]),
  },
  methods: {
    toggleToTokenModal() {
      this.$store.dispatch("tokens/toggleToModal");
    },
    toggleFromTokenModal() {
      this.$store.dispatch("tokens/toggleFromModal");
    },
    swapTokens() {
      this.$store.dispatch("tokens/swapTokens");
    },
    checkPools() {
      if (this.token1 && this.token2 !== "Select Asset" && this.amount !== "") {
        const data = this.pools.filter((pool) => {
          return pool.tokenA === this.token1 && pool.tokenB === this.token2;
        });
        this.info = data[0]?.price;
        this.displayValue = this.info * this.amount;
      }
    },
    checkBalance() {
      if (this.token1) {
        const data = this.balances.filter(
          (balance) => balance.token === this.token1
        );
        this.balance = data[0]?.balance;
      }
    },
  },
};
</script>
<style>
.center {
  margin: 0 auto;
}
</style>
