<template>
  <form @submit.prevent="submitForm" class="restaurant-form">
    <div class="restaurant-form-info">
      <input
        type="text"
        v-model="form.name"
        placeholder="Restaurant Name"
        class="restaurant-form-name"
        required
      />
      <textarea
        v-model="form.description"
        placeholder="Description"
        required
      ></textarea>
      <input
        type="text"
        v-model="form.contact"
        placeholder="Contact Information"
        required
      />
      <input
        type="text"
        v-model="form.address"
        placeholder="Address"
        required
      />
    </div>

    <div class="restaurant-form-image">
      <input
        type="text"
        v-model="form.image"
        placeholder="Image URL"
        required
        @input="imageChange"
      />
      <img
        :src="
          form.image.trim() !== ''
            ? form.image
            : 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
        "
        alt="restaurant image"
        class="restaurant-image"
      />
    </div>

    <button type="submit" :disabled="isLoading">
      <Loader v-if="isLoading" />
      <span v-else>Submit</span>
    </button>

    <p v-if="message">{{ message }}</p>
  </form>
</template>

<script setup>
import { reactive, ref } from "vue";
import RestaurantCard from "./RestaurantCard.vue";
import Loader from "./Loader.vue";
import { useRouter } from "vue-router";

const { info, submitAction, redirect } = defineProps([
  "info",
  "submitAction",
  "redirect",
]);
const img = ref(null);
const message = ref("");
const router = useRouter();

const timeoutId = ref(null);

const isLoading = ref(false);

const form = reactive({
  name: info?.name || "",
  description: info?.description || "",
  contact: info?.contact || "",
  address: info?.address || "",
  image: info?.image || "",
});

function imageChange() {
  if (timeoutId.value) {
    clearTimeout(timeoutId.value);
  }
  timeoutId.value = setTimeout(() => {
    if (img.value) {
      img.value.src = form.image || "";
    }
  }, 1000);
}

const submitForm = async () => {
  isLoading.value = true;

  const res = await submitAction({...info??{},...form});
  message.value = res.message;

  isLoading.value = false;

  if (redirect && res.success) {
    setTimeout(() => {router.replace(redirect)}, 1000);
  }
};
</script>
