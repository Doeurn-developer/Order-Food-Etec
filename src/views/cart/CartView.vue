<script setup>
import { useCartStore } from "../../stores/cart";
import CartItemRow from "./componets/CartItemRow.vue";
import { formatCurrency } from "../../utils/formatCurrency";

const cartStore = useCartStore();
</script>

<template>
  <div class="p-6 bg-zinc-800 text-white">
    <div class="py-4 text-xl hover:text-red-600">
        <RouterLink to="/"><i class="fa-solid fa-circle-chevron-left"></i></RouterLink>
      </div>
    <h1 class="text-3xl font-bold mb-5">Shopping Cart</h1>

    <CartItemRow
      v-for="item in cartStore.cartItems"
      :key="item.id"
      :item="item"
    />

    <div class="mt-5 text-xl font-bold">
      Total:
      {{ formatCurrency(cartStore.totalPrice) }}
    </div>

    <RouterLink
      to="/checkout"
      class="bg-green-500 text-white px-5 py-3 rounded inline-block mt-5"
    >
      Checkout
    </RouterLink>
  </div>
</template>
