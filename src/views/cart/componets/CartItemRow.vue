<script setup>
import { formatCurrency } from "../../../utils/formatCurrency";

defineProps({
  item: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['remove']);
</script>

<template>
  <div class="flex justify-between px-6 border-b py-4 w-[80%] mx-auto transition-colors">
    
  
    <div class="flex gap-4 items-start flex-1">
      <img 
        class="w-20 h-20 object-cover border rounded-lg border-blue-500 p-1" 
        :src="item.image" 
        alt="product"
      >
      
      <div class="pt-1">
        <h2 class="font-semibold text-lg leading-tight">{{ item.name }}</h2>
        <p class="text-gray-600 mt-1">
          Qty: <span class="font-medium">{{ item.quantity }}</span>
        </p>
      </div>
    </div>

   
    <div class="flex flex-col items-end justify-between">
      <p class="text-red-500 font-semibold text-lg">
        {{ formatCurrency(item.price * item.quantity) }}
      </p>
      
      <button 
        @click="emit('remove', item.id)"
        class="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-all"
        title="Remove item"
      >
        <i class="fa-solid fa-trash text-xl"></i>
      </button>
    </div>
  </div>
</template>