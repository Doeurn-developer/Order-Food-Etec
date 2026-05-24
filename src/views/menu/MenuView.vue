<script setup>
import { ref } from "vue";
import foods from "../../data/restaurantMenu.json";
import FoodCard from "./FoodCard.vue";
import { useCartStore } from "../../stores/cart";

const cartStore = useCartStore();
const showModal = ref(false);
const selectedFood = ref(null);
const quantity = ref(1);

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
    closeModal();
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
  <div class="p-6 bg-zinc-800 min-h-screen">
    <div class="flex justify-between items-center">
      <h1
        class="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-800 to-yellow-500 bg-clip-text text-transparent underline"
      >
        Restaurant Menu
      </h1>
      <div class="flex gap-4 items-center text-white duration-300">
        <div
          @click="showModal = true"
          class="flex items-center gap-1.5 text-white hover:text-blue-500 transition-colors duration-300 relative cursor-pointer"
        >
          <span class="text-2xl relative">
            <i class="fa-solid fa-basket-shopping"></i>
          </span>
          <span
            v-if="cartStore.cartItems.length > 0"
            class="bg-red-500 text-white text-xs absolute font-medium top-1 p-1 left-5 w-[15px] h-[15px] flex items-center justify-center rounded-full px-1.5"
          >
            {{ cartStore.cartItems.length }}
          </span>
        </div>
      </div>
    </div>

    <div
      class="grid w-[70%] lg:w-full m-auto md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6"
    >
      <FoodCard
        class="h-[400px] cursor-pointer transition-transform hover:scale-105"
        v-for="food in foods"
        :key="food.id"
        :food="food"
        @click="openModal(food)"
      />
    </div>


    <div
      v-if="showModal"
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
          v-if="selectedFood?.image"
          :src="selectedFood.image"
          :alt="selectedFood?.name"
          class="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h2 class="text-2xl font-bold text-white mb-2">{{ selectedFood?.name }}</h2>

        <p class="text-gray-400 text-sm mb-4">{{ selectedFood?.description }}</p>
        <div class="flex justify-between items-center mb-6">
          <span class="text-emerald-400 text-2xl font-bold">
            ${{ selectedFood?.price }}
          </span>
          <div v-if="selectedFood?.rating" class="flex items-center gap-1">
            <i class="fa-solid fa-star text-yellow-400"></i>
            <span class="text-white font-medium">{{ selectedFood?.rating }}</span>
          </div>
        </div>
        <div class="mb-6">
          <label class="text-white font-medium block mb-3">Quantity</label>
          <div class="flex items-center gap-4 bg-zinc-800 rounded-lg w-fit px-4 py-2">
            <button
              @click="decreaseQuantity"
              class="text-gray-400 hover:text-white transition-colors text-lg"
            >
              <i class="fa-solid fa-minus"></i>
            </button>
            <span class="text-white font-bold text-lg w-8 text-center">
              {{ quantity }}
            </span>
            <button
              @click="increaseQuantity"
              class="text-gray-400 hover:text-white transition-colors text-lg"
            >
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
        <div class="border-t border-zinc-700 pt-4 mb-6">
          <div class="flex justify-between text-white">
            <span>Subtotal:</span>
            <span class="font-bold">
              ${{ (selectedFood?.price * quantity).toFixed(2) }}
            </span>
          </div>
        </div>
        <div class="flex gap-3">
          <button
            @click="closeModal"
            class="flex-1 px-4 py-3 bg-zinc-700 text-white rounded-lg font-medium hover:bg-zinc-600 transition-colors"
          >
            Cancel
          </button>
          <RouterLink to="/checkout"
            class="flex-1 px-4 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2"
          >
            <i class="fa-solid fa-cart-plus"></i>
            Checkout
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>