<template>
  <div>
    <h2 class="italic dark:text-white">Address: {{ formatAddress }}</h2>
  </div>
</template>

<script>
import account from "../data/account.json";
export default {
  name: "Address",
  data() {
    return {
      userAddress: "",
    };
  },
  mounted() {
    this.userAddress = account.address;
  },
  computed: {
    formatAddress() {
      return this.convertToShortString(this.userAddress);
    },
  },
  methods: {
    convertToShortString(text) {
      let first = "";
      let end = "";
      if (text !== undefined) {
        first = text.substring(0, 6);
        end = text.substring(text.length, text.length - 4);
        const full = `${first}...${end}...`;
        return full;
      }
    },
  },
};
</script>
