<script setup>
import { ref } from "vue";
import SignUp from "./components/SignUp.vue";

const email = ref("");
</script>

<template>
  <h1>{{ email }}</h1>
  <SignUp v-model:email="email" />
</template>

<style>
* {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
