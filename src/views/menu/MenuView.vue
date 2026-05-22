<script setup>
import foods from "../../data/restaurantMenu.json";
import FoodCard from "./FoodCard.vue";
import { useCartStore } from "../../stores/cart";

const cartStore = useCartStore();
</script>

<template>
  
  <div class="p-6 bg-zinc-800">  
    <div class="flex justify-between items-center">
      <h1
        class="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-800 to-yellow-500 bg-clip-text text-transparent underline"
      >
        Restaurant Menu
      </h1>
      <div class="flex gap-4 items-center text-white duration-300 ">
        <RouterLink to="/cart" class="text-red-500">
          <span class="text-xl text-white hover:text-blue-500"
            ><i class="fa-solid fa-basket-shopping"></i
          ></span>
          ({{ cartStore.cartItems.length }})
        </RouterLink>

        <RouterLink to="/orders" class="text-xl hover:text-blue-500"><i class="fa-solid fa-shop"></i></RouterLink>
      </div>
    </div>

    <div class="grid w-[70%] lg:w-full m-auto md:grid-cols-2 lg:grid-cols-4 grid-cols-1  gap-6">
      <FoodCard
        class="h-[400px]"
        v-for="food in foods"
        :key="food.id"
        :food="food"
      />
    </div>
  </div>
</template>
