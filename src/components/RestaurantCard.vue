<template>
  <RouterLink :to="`/restaurant/${restaurant.id}`"
    class="restaurant-card"
    :style="`background-image: url(${restaurant.image})`"
  >
    <h2 class="text-2xl font-semibold">{{ restaurant.name }}</h2>
    <p class="restaurant-info opacity-70">{{ restaurant.description }}</p>

    <p class="restaurant-info "><Phone size="16px" />{{ restaurant.contact }}</p>
    <p class="restaurant-info italic text-ellipsis overflow-hidden">
      <MapPin size="16px" /> {{ restaurant.address }}
    </p>
  </RouterLink>
</template>

<script setup>
import { MapPin, Phone, Pin } from "lucide-vue-next";
import { RouterLink } from "vue-router";

const { restaurant } = defineProps(["restaurant"]);
</script>
