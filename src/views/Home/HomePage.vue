<script setup >
import { RouterLink } from 'vue-router'
import { useCartStore } from "../../stores/cart.js"   
import SlideBar from "@/components/SlideBar.vue"
import foodKhmer from '../../data/homeCart.json'
import Swal from 'sweetalert2'
const cartStore = useCartStore()
const addToCart = (food) => {
  cartStore.addToCart(food)

  Swal.fire({
    title: "✅ បានបញ្ចូលទៅក្នុងកន្ត្រក",
    html: `<strong>${food.name}</strong>`,
    icon: "success",
    timer: 1800,
    showConfirmButton: false,
    position: "top-end",
    toast: true,           // រូបរាង Toast (ផ្ទាំងតូច)
    timerProgressBar: true
  })
}
</script>

<template>
  <div>
    <SlideBar />

    <div class="bg-zinc-200 min-h-screen w-full p-5">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <h1 class="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            មុខម្ហូបខ្មែរ
          </h1>

          <div class="flex items-center gap-6">
            <RouterLink to="/checkout" class="text-3xl text-zinc-700 hover:text-blue-600 transition-all hover:scale-110 relative">
              <i class="fa-solid fa-basket-shopping"></i>
              <span v-if="cartStore.cartItems.length > 0" 
                    class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {{ cartStore.cartItems.length }}
              </span>
            </RouterLink>

            <RouterLink to="/menu" class="bg-red-500 hover:bg-transparent hover:border-blue-500 border-2 text-white hover:text-blue-600 px-6 py-2 rounded-md font-medium">
              មុខម្ហូបបរទេស
            </RouterLink>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="(food, index) in foodKhmer" 
               :key="food.id || index"
               class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-yellow-400">
            
            <div class="h-48 overflow-hidden">
              <img :src="food.image" :alt="food.name" class="w-full h-full object-cover hover:scale-105 transition-transform">
            </div>

            <div class="p-4 text-center">
              <h3 class="text-xl font-semibold">{{ food.name }}</h3>
              <p class="text-red-500 font-bold text-lg">${{ food.price }}</p>
            </div>

            <div class="px-4 pb-4">
              <button @click="addToCart(food)" 
                      class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg">
                បញ្ចូលទៅក្នុងកន្ត្រក
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>