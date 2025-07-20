<template>
  <nav>
    <RouterLink class="navLogo" to="/">
      <img
        src="../assets/vue.svg"
        alt="logo"
        class="logo"
        sizes="16px"
        style="padding: 0px"
      />
    </RouterLink>
    <RouterLink
      class="navItem"
      :class="{ active: $route.path === '/add-restaurant' }"
      to="/add-restaurant"
      ><House /> Add Restaurant</RouterLink
    >

    <div class="navItem" @click="signOut()"><LogOut /> Log out</div>
  </nav>
</template>

<script setup>
import { CookingPot, House, LogOut } from "lucide-vue-next";
import { RouterLink, useRouter } from "vue-router";
const router = useRouter();
function signOut() {
  localStorage.removeItem("user");
  router.push("/auth/signin");
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: end;
  background-color: #111111;
}
.navLogo {
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  color: #42b983;
  margin-right: auto;
  padding: 0.5em;
  gap: 0.5em;
}
.navItem {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  list-style: none;
  padding: 1em;
  text-decoration: none;
  font-weight: bold;
  color: #42b983;
  background-color: none;
  cursor: pointer;
}
.navItem:hover {
  color: #ffffff;
  background-color: #27b659;
}
.active {
  color: white;
  background-color: #27b659;
}
</style>
