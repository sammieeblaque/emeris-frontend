<template>
  <div class="pl-20">
    <input
      type="checkbox"
      @click="toggleTheme"
      class="checkbox cursor-pointer"
      id="checkbox"
    />
    <label for="checkbox" class="label">
      <i class="fas fa-moon"></i>
      <i class="fas fa-sun"></i>
      <div class="ball"></div>
    </label>
  </div>
</template>
<script>
export default {
  methods: {
    toggleTheme() {
      this.$store.dispatch("toggleTheme");
    },
  },
};
</script>
<style>
.checkbox {
  opacity: 0;
  position: absolute;
}

.label {
  width: 50px;
  height: 26px;
  background-color: #111;
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  transform: scale(1.5);
}

.ball {
  width: 20px;
  height: 20px;
  background-color: white;
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}

/*  target the elemenent after the label*/
.checkbox:checked + .label .ball {
  transform: translateX(24px);
}

.fa-moon {
  color: pink;
}

.fa-sun {
  color: yellow;
}
</style>
