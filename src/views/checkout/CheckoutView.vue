<script setup>
import { useCartStore } from "../../stores/cart";

const cartStore = useCartStore();

function placeOrder() {
  alert("Order placed successfully!");
  cartStore.clearCart();
}
</script>

<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-5">
      Checkout
    </h1>

    <input
      type="text"
      placeholder="Enter Address"
      class="border p-3 w-full rounded"
    />

    <button
      @click="placeOrder"
      class="bg-orange-500 text-white px-5 py-3 rounded mt-5"
    >
      Place Order
    </button>
  </div>
</template>