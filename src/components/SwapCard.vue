<template>
  <section
    class="mt-20 bg-gray-200 shadow-xl rounded-2xl w-1/3 h-full center p-4"
  >
    <h1 class="text-left text-2xl font-bold">Swap</h1>
    <!-- Top section FROM -->
    <section
      class="mt-5 flex justify-between items-center p-6 bg-white rounded-2xl"
    >
      <div
        class="flex justify-between items-center bg-gray-200 rounded-xl shadow-xl px-4 py-2 cursor-pointer hover:bg-gray-300"
      >
        <div class="text-black font-semibold">USDT</div>
        <div><chevron-down-icon class="h-6 pl-3" /></div>
      </div>
      <div class="pr-2">
        <input type="text" placeholder="0.0" class="text-right text-2xl" />
      </div>
    </section>
    <div>
      <switch-vertical-icon
        class="h-8 m-auto text-white text-center -mb-4 border-gray-400 border-2 rounded-xl cursor-pointer"
      />
    </div>
    <!-- To Section -->
    <section
      class="mt-5 flex justify-between items-center p-6 bg-white rounded-2xl"
    >
      <div
        class="flex justify-between items-center bg-gray-200 rounded-xl shadow-xl px-4 py-2 cursor-pointer hover:bg-gray-300"
      >
        <div class="text-black font-semibold">Select asset</div>
        <div><chevron-down-icon class="h-6 pl-3" /></div>
      </div>
      <div class="pr-2">
        <!-- <input type="text" placeholder="0.0" class="text-right text-2xl" /> -->
        <span class="text-2xl text-gray-400">0.00</span>
      </div>
    </section>
    <section class="my-4">
      <button
        class="bg-white hover:bg-gray-300 cursor-pointer rounded-2xl shadow-xl w-full p-4 text-black font-bold"
      >
        PERFORM SWAP
      </button>
    </section>
  </section>
</template>
<script>
import { ChevronDownIcon } from "@heroicons/vue/solid";
import { SwitchVerticalIcon } from "@heroicons/vue/solid";

export default {
  components: {
    ChevronDownIcon,
    SwitchVerticalIcon,
  },
};
</script>
<style>
.center {
  margin: 0 auto;
}
</style>
