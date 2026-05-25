<script setup>
import { ref } from "vue";
import foods from "../../data/restaurantMenu.json";
import FoodCard from "./FoodCard.vue";
import { useCartStore } from "../../stores/cart";

const cartStore = useCartStore();
const showModal = ref(false);
const selectedFood = ref(null);
const quantity = ref(1);

const showToast = ref(false);
const toastMessage = ref("");

const openModal = (food) => {
  selectedFood.value = food;
  quantity.value = 1;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  selectedFood.value = null;
  quantity.value = 1;
};

const addToCart = () => {
  if (selectedFood.value) {
    cartStore.addToCart({
      ...selectedFood.value,
      quantity: quantity.value,
    });
    
    toastMessage.value = `បានបន្ថែម ${selectedFood.value.name} ទៅក្នុងកន្ត្រក!`;
    closeModal();

    showToast.value = true;
    setTimeout(() => {
      showToast.value = false;
    }, 3000);
  }
};

const increaseQuantity = () => {
  quantity.value++;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};
</script>

<template>
  <div class="p-6 bg-zinc-900 min-h-screen relative">
    
    <Transition
      enter-active-class="transform ease-out duration-300 transition"
      enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="showToast" class="fixed top-5 right-5 z-50 bg-emerald-600 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 border border-emerald-400">
        <i class="fa-solid fa-circle-check text-xl"></i>
        <span class="font-medium">{{ toastMessage }}</span>
      </div>
    </Transition>

    <div class="rounded-lg border border-zinc-700 bg-zinc-800 mb-6 hover:bg-transparent duration-200 hover:scale-105 w-fit px-4 py-1.5 cursor-pointer">
      <RouterLink to="/" class="flex items-center gap-2">
        <i class="fa-regular fa-hand-point-left"></i> Back
      </RouterLink>
    </div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-yellow-500 bg-clip-text text-transparent underline">
        Menu Food Foreign
      </h1>
      
      <RouterLink to="/checkout" class="flex items-center gap-1.5 text-white hover:text-emerald-400 transition-colors duration-300 relative cursor-pointer">
        <span class="text-2xl relative">
          <i class="fa-solid fa-basket-shopping"></i>
        </span>
        
        <span
          v-if="cartStore.cartItems.length > 0"
          class="bg-red-500 text-white text-xs absolute font-medium -top-2 -right-2 w-[18px] h-[18px] flex items-center justify-center rounded-full px-1"
        >
          {{ cartStore.cartItems.length }}
        </span>
      </RouterLink>
    </div>

    <div class="grid w-[70%] lg:w-full m-auto md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6">
      <FoodCard
        class="h-[400px] cursor-pointer transition-transform hover:scale-105"
        v-for="food in foods"
        :key="food.id"
        :food="food"
        @click="openModal(food)"
      />
    </div>

    <div
      v-if="showModal && selectedFood"
      class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      @click="closeModal"
    >
      <div
        class="bg-zinc-900 rounded-lg shadow-2xl p-8 max-w-md w-full mx-4 relative"
        @click.stop
      >
        <button
          @click="closeModal"
          class="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <i class="fa-solid fa-xmark text-2xl"></i>
        </button>

        <img
          v-if="selectedFood.image"
          :src="selectedFood.image"
          :alt="selectedFood.name"
          class="w-full h-48 object-cover rounded-lg mb-4"
        />
        
        <h2 class="text-2xl font-bold text-white mb-2">{{ selectedFood.name }}</h2>
        <p class="text-gray-400 text-sm mb-4">{{ selectedFood.description }}</p>
        
        <div class="flex justify-between items-center mb-6">
          <span class="text-emerald-400 text-2xl font-bold">${{ selectedFood.price }}</span>
          <div v-if="selectedFood.rating" class="flex items-center gap-1">
            <i class="fa-solid fa-star text-yellow-400"></i>
            <span class="text-white font-medium">{{ selectedFood.rating }}</span>
          </div>
        </div>

        <div class="mb-6">
          <label class="text-white font-medium block mb-3">Quantity</label>
          <div class="flex items-center gap-4 bg-zinc-800 rounded-lg w-fit px-4 py-2">
            <button @click="decreaseQuantity" class="text-gray-400 hover:text-white transition-colors text-lg">
              <i class="fa-solid fa-minus"></i>
            </button>
            <span class="text-white font-bold text-lg w-8 text-center">{{ quantity }}</span>
            <button @click="increaseQuantity" class="text-gray-400 hover:text-white transition-colors text-lg">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>

        <div class="border-t border-zinc-700 pt-4 mb-6">
          <div class="flex justify-between text-white">
            <span>Subtotal:</span>
            <span class="font-bold">${{ (selectedFood.price * quantity).toFixed(2) }}</span>
          </div>
        </div>

        <div class="flex gap-3">
          <button
            @click="closeModal"
            class="flex-1 px-4 py-3 bg-zinc-700 text-white rounded-lg font-medium hover:bg-zinc-600 transition-colors"
          >
            Cancel
          </button>
          
          <button
            @click="addToCart"
            class="flex-1 px-4 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2"
          >
            <i class="fa-solid fa-cart-plus"></i>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>