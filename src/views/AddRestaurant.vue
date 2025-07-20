<template>
    <h1 class="header">Add a new restaurant information</h1>
    <RestaurantForm :submitAction="addRestaurant" redirect="/"/>
</template>

<script setup>
import RestaurantForm from '../components/RestaurantForm.vue';
import { addRestaurant } from '../services/restaurant';
</script>
