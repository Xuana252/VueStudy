<template>
  <div class="restaurant-detail-container">
    <img
      :src="restaurant?.image"
      alt="restaurant image"
      class="restaurant-image"
    />
    <div class="restaurant-detail">
      <div class="flex justify-end gap-4 items-center mb-4">
        <RouterLink
          :to="`/update-restaurant/${restaurantId}`"
          class="text-blue-500 hover:underline"
        >
          <Edit />
        </RouterLink>
        <button
          @click="handleDelete"
          class="text-white bg-red-500 rounded p-1 hover:underline"
        >
          <Trash />
        </button>
      </div>
      <h1 class="text-3xl font-bold">{{ restaurant?.name }}</h1>
      <p class="my-4">{{ restaurant?.description }}</p>
      <p class="font-semibold">
        <Phone size="16px" />{{ restaurant?.contact }}
      </p>
      <p class="italic text-ellipsis overflow-hidden">
        <MapPin size="16px" />{{ restaurant?.address }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { deleteRestaurant, getRestaurantById } from "../services/restaurant";
import { Edit, Trash } from "lucide-vue-next";

const route = useRoute();
const router = useRouter();
const restaurantId = route.params.id;
const restaurant = ref(null);

async function handleDelete() {
  const result = confirm("Are you sure you want to delete this restaurant?");
  if (!result) return;
  const res = await deleteRestaurant(restaurantId);
  if (res.success) {
    router.replace("/");
  } else {
    alert(res.message);
  }
}

onMounted(async () => {
  // Fetch restaurant data by ID when the component is mounted
  const res = await getRestaurantById(restaurantId);
  if (res.success) {
    restaurant.value = res.data;
  } else {
    router.replace("/");
  }
});
</script>

<style scoped>
.restaurant-detail-container {
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  overflow: hidden;
}

.restaurant-detail {
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex: 1;
}

.restaurant-image {
  width: auto;
  height: 100%;
  object-fit: cover;
}
</style>
