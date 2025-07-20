<script setup>
import { ref } from "vue";
import SignUp from "./views/SignUp.vue";
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";

const email = ref("");
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>

</style>
