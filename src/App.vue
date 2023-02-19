<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { useStore } from "vuex";
import { computed, defineAsyncComponent } from "vue";

const store = useStore();
const add = () => {
  store.commit("add", 1);
};
</script>

<template>
  <div>
    <span @click="add" class="text-green-300">+</span>
    <span class="bg-gray-400">{{}}</span>
    <router-link to="me">name</router-link>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <router-view> </router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
