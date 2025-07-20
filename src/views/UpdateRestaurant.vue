<template>
  <h1 class="header">Update restaurant information</h1>
 <RestaurantForm v-if="info.name" :info="info" :submitAction="updateRestaurant" :redirect="`/restaurant/${restaurantId}`"/>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import RestaurantForm from "../components/RestaurantForm.vue";


import { getRestaurantById, updateRestaurant } from "../services/restaurant";
import router from "../router/router";
import { useRoute } from "vue-router";
const route = useRoute();
const restaurantId = route.params.id;

const info = ref({
  name: "",
  description: "",
  contact: "",
  address: "",
  image: null,
});

onMounted(async () => {
  const res = await getRestaurantById(restaurantId);
  if (res.success) {
    info.value = res.data;
  } else {
    router.replace("/");
    console.error("Failed to fetch restaurant data:", res.message);
  }
});

</script>
