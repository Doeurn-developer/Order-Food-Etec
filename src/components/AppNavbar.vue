<script setup>
import LayoutMenu from '../Layouts/LayoutMenu.vue';
import SlideBar from './slideBar.vue';

// import { useCartStore } from "../stores/cart";

// const cartStore = useCartStore();
</script>

<template>
  <nav
    class="w-full p-4 flex items-center bg-blue-900 justify-center fixed top-0 left-0 z-50 transition-all duration-300"
  >
    <RouterLink
      to="/"
      class="route1 text-3xl bg-gradient-to-r from-emerald-800 to-emerald-500 bg-clip-text text-transparent no-underline hover:scale-105 duration-300"
    >
      FOOD ORDER
    </RouterLink>
    <!-- <div class="flex gap-4 ">
      <RouterLink to="/cart">
        Cart ({{ cartStore.cartItems.length }})
      </RouterLink>

      <RouterLink to="/orders">
        Orders
      </RouterLink>
    </div> -->
  </nav>
  
</template>
