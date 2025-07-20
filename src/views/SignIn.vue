<script setup>
import { onMounted, ref, watch } from "vue";
import axios from "axios";
import { RouterLink, useRouter } from "vue-router";
import Loader from "../components/Loader.vue";
import { signIn } from "../services/auth";

const router = useRouter();

const email = defineModel("email");

const password = ref("");
const message = ref("");

const isLoading = ref(false);

async function handleSubmit() {
  isLoading.value = true;
  const user = {
    email: email.value,
    password: password.value,
  };

  const result = await signIn(user);

  message.value = result.message;
  if (result.success) {
    router.push("/");
  }
  isLoading.value = false;
}
</script>

<template>
  <form action="" class="auth-form" @submit.prevent="handleSubmit">
    <img src="../assets/vue.svg" alt="logo" class="logo" />
    <h1 style="text-align: center">Sign in</h1>

    <input type="email" v-model="email" placeholder="Email" required />
    <input
      type="password"
      v-model="password"
      minlength="8"
      placeholder="Password"
      required
    />
    <button
      type="submit"
      :disabled="isLoading"
      style="display: flex; justify-content: center"
    >
      <Loader v-if="isLoading" /> <span v-else>Sign in</span>
    </button>
    <p>{{ message }}</p>
    <p>
      Don't have an account? <RouterLink to="/auth/signup">Sign up</RouterLink>
    </p>
  </form>
</template>
