<template>
  <h1 align="center" class="text-3xl font-bold">
    Welcome home <span style="color: #42b983">{{ user.name }}</span>
  </h1>

  <p class="text-center text-xl mt-4  ">
    See the list of restaurants below:
  </p>

  <ul class="restaurant-list">
    <li v-for="restaurant in restaurants" :key="restaurant.id">
      <RestaurantCard :restaurant="restaurant" />
    </li>
  </ul>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getRestaurants } from "../services/restaurant";
import RestaurantCard from "../components/RestaurantCard.vue";

const user = JSON.parse(localStorage.getItem("user"));
const restaurants = ref([]);

onMounted(async () => {
  const res = await getRestaurants();
  console.log(res);
  restaurants.value = res.data;
});
</script>
