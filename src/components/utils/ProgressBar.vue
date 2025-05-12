<template>
  <div class="progress-wrapper">
    <div
      class="progress-bar"
      :style="{ width: storeValue + '%', background: backgroundColor }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  progress: {
    type: Number,
    default: 0,
  },
});

const storeValue = ref(0);
const backgroundColor = ref("#ff3c41");

function setProgressColor() {
  if (storeValue.value < 25) {
    backgroundColor.value = "#ff3c41";
  } else if (storeValue.value < 50) {
    backgroundColor.value = "#FFD200";
  } else if (storeValue.value < 75) {
    backgroundColor.value = "#0ebeff";
  } else {
    backgroundColor.value = "#47CF73";
  }
}

function loadProgress() {
  let percentage = 0;
  const load = setInterval(() => {
    storeValue.value = percentage;
    setProgressColor();
    percentage++;
    if (percentage > props.progress) {
      clearInterval(load);
    }
  }, 50);
}

onMounted(() => {
  loadProgress();
});
</script>

<style scoped>
.progress-wrapper {
  position: relative;
  width: 100%;
  text-align: center;
  margin: 20px 0;
}
.progress-bar {
  height: 20px;
  transition:
    width 0.3s,
    background 0.3s;
}
</style>
