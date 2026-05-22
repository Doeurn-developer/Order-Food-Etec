<script setup>
import { useCartStore } from "../stores/cart";

const cartStore = useCartStore();
</script>

<template>
  <nav class="bg-orange-500 text-white p-4 flex justify-between">
    <RouterLink to="/">Food Order</RouterLink>

    <div class="flex gap-4">
      <RouterLink to="/cart">
        Cart ({{ cartStore.cartItems.length }})
      </RouterLink>

      <RouterLink to="/orders">
        Orders
      </RouterLink>
    </div>
  </nav>
</template>