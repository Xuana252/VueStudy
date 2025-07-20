<script setup>
import { onMounted, ref, watch } from "vue";
import axios from "axios";
import { RouterLink, useRouter } from "vue-router";
import Loader from "../components/Loader.vue";

const router = useRouter();

const email = defineModel("email");

const username = ref("");
const password = ref("");
const message = ref("");

const isLoading = ref(false);

async function handleSubmit() {
  try {
    isLoading.value = true;
    let result = await axios.post("http://localhost:3000/user", {
      name: username.value,
      email: email.value,
      password: password.value,
    });
    message.value = "User created successfully!";
    localStorage.setItem("user", JSON.stringify(result.data));

    setTimeout(() => {
      message.value = "";
      router.push("/"); // Redirect to home after 2 seconds
    }, 1000);
  } catch (error) {
    message.value = "Signup failed";
    console.error(error);
    isLoading.value = false;
  }
}
</script>

<template>
  <form action="" class="auth-form" @submit.prevent="handleSubmit">
    <img src="../assets/vue.svg" alt="logo" class="logo" />
    <h1 style="text-align: center">Sign up</h1>

    <input type="text" v-model="username" placeholder="Username" required />
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
      <Loader v-if="isLoading" /> <span v-else>Sign up</span>
    </button>
    <p>{{ message }}</p>

    <p>
      Already have an account?
      <RouterLink to="/auth/signin">Sign in</RouterLink>
    </p>
  </form>
</template>
