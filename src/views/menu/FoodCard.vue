<script setup>
import { useCartStore } from "../../stores/cart";
import { formatCurrency } from "../../utils/formatCurrency";
const props = defineProps({
  food: Object,
});

const cartStore = useCartStore();
</script>

<template>
  <div class="border border-blue-500 rounded-xl p-4 shadow">
    <img :src="food.image" class="w-full h-[65%] object-cover rounded-lg" />

    <h2 class="text-xl font-bold text-white mt-3">
      {{ food.name }}
    </h2>

    <p class="text-orange-500">
      {{ formatCurrency(food.price) }}
    </p>

    <button
      @click="cartStore.addToCart(food)"
      class="bg-orange-500 text-white px-4 py-2 rounded mt-3"
    >
      Add To Cart
    </button>
  </div>
</template>
