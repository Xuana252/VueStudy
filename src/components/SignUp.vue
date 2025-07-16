<template>
  <form action="" class="signup-form" @submit.prevent="handleSubmit">
    <img src="../assets/vue.svg" alt="logo" class="logo" />
    <h1 style="text-align: center">Sign up</h1>

    <input type="text" v-model="username" placeholder="Username" required />
    <input type="email" v-model="email" placeholder="Email" required />
    <input type="password" v-model="password" minlength="8" placeholder="Password" required />
    <button type="submit">Sign up</button>
    <p>{{ message }}</p>
  </form>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import axios from "axios";

const email = defineModel("email");

const username = ref("");
const password = ref("");
const message = ref("");

onMounted(() => {
  alert("Welcome to the Sign Up page!");
});

watch(email, (newEmail) => {
  console.log("Email changed:", newEmail);
});

async function handleSubmit() {
  try {
    let result = await axios.post("http://localhost:3000/user", {
      name: username.value,
      email: email.value,
      password: password.value,
    });
    message.value = "User created successfully!";
    console.log(result.data);
  } catch (error) {
    message.value = "Signup failed";
    console.error(error);
  }
}
</script>

<style scoped>
.logo {
  height: auto;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.signup-form {
  font-size: 1.2em;
  width: fit-content;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.signup-form input {
  font-size: 1em;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.signup-form button {
  font-size: 1em;
  padding: 0.5em;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.signup-form button:hover {
  background-color: #369a6f;
}
</style>
