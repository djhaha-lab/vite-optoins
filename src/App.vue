<script setup lang="ts"></script>

<template>
  <div class="tx1"></div>
  <div class="hollow-circles"></div>
</template>

<style scoped>
.tx1 {
  width: 100px;
  height: 100px;
  background: radial-gradient(circle at 0 50px, transparent 10px, #34d399 0) top left/100px 100%
    no-repeat;
}
.hollow-circles {
  width: 300px;
  height: 100px;
  position: relative;
  background: #00adb5;
  margin-bottom: 10px;
}
.hollow-circles::after {
  content: '';
  position: absolute;
  height: 5px;
  width: 100%;
  left: 0;
  bottom: -5px;
  background-image: linear-gradient(to right, #00adb5 5px, transparent 5px, transparent),
    radial-gradient(circle at 10px 5px, transparent 5px, #00adb5 5px);
  background-size: 15px 5px;
}
</style>
