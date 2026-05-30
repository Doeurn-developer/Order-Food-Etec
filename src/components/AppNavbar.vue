<script setup>
import { ref } from 'vue';

const isOpen = ref(false)
const OpenMenu = () => {
  isOpen.value = !isOpen.value
}
// import { useCartStore } from "../stores/cart";
// const cartStore = useCartStore();
</script> 

<template>
  <nav
    class="w-full p-4 flex items-center bg-blue-900 justify-between fixed top-0 left-0 z-50 transition-all duration-300"
  >
  <div @click="OpenMenu" class="md:hidden text-xl text-white">
    <i :class="isOpen ? 'fa-solid fa-xmark':'fa-solid fa-bars'"></i>
  </div>

    <div class="route2 text-xl hidden text-white md:flex gap-5 ">
      <RouterLink to="/" class="hover:text-yellow-600" active-class="text-yellow-600 underline">Khmer Food</RouterLink>
      <RouterLink to="menu" class="hover:text-yellow-600" active-class="text-yellow-600 underline">Foreign Food</RouterLink>
    </div>

    <RouterLink
      to="/"
      class="route1  text-3xl bg-gradient-to-r from-emerald-800 to-emerald-500 bg-clip-text text-transparent no-underline hover:scale-105 duration-300"
    >
      FOOD ORDER
    </RouterLink>
    <div class="text-xl hidden md:flex text-white gap-3 route2">
      <RouterLink to="checkout" class="hover:text-yellow-600" active-class="text-yellow-600 underline">Checkout</RouterLink>
      <RouterLink to="add" class="hover:text-yellow-600" active-class="text-yellow-600 underline">Add Food</RouterLink>
    </div>
    </nav>

      <div
    v-if="isOpen"
    class="md:hidden route2 fixed z-50  bg-blue-800 text-white flex flex-col gap-3 p-4 w-full "
  >
    <RouterLink to="/" class="hover:text-yellow-600" active-class="text-yellow-600 underline">Khmer Food</RouterLink>
    <RouterLink to="/menu" class="hover:text-yellow-600" active-class="text-yellow-600 underline">Foreign Food</RouterLink>
    <RouterLink to="/checkout" class="hover:text-yellow-600" active-class="text-yellow-600 underline">Checkout</RouterLink>
    <RouterLink to="/add" class="hover:text-yellow-600" active-class="text-yellow-600 underline" >Add Food</RouterLink>
  </div>   
  
</template>