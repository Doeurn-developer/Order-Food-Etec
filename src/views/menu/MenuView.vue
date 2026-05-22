<script setup>
import foods from "../../data/restaurantMenu.json";
import FoodCard from "./FoodCard.vue"
</script>

<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-6">
      Restaurant Menu
    </h1>

    <div class="grid md:grid-cols-3 gap-6">
      <FoodCard
        v-for="food in foods"
        :key="food.id"
        :food="food"
      />
    </div>
  </div>
</template>