<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "../../stores/cart";
import Swal from 'sweetalert2';   // ←←← បន្ថែមបន្ទាត់នេះ

const cartStore = useCartStore();
const router = useRouter();

const address = ref("");
const showSuccessModal = ref(false);

// Computed Values
const subtotal = computed(() => {
  return cartStore.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
});

const deliveryFee = computed(() => {
  return cartStore.cartItems.length > 0 ? 1.50 : 0;
});

const total = computed(() => subtotal.value + deliveryFee.value);

// ============== លុបមុខម្ហូបពីកន្ត្រក ==============
const removeFromCart = (id) => {
  Swal.fire({
    title: "តើអ្នកពិតជាចង់លុបមែនទេ?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "លុប",
    cancelButtonText: "បោះបង់",
    confirmButtonColor: "#ef4444"
  }).then((result) => {
    if (result.isConfirmed) {
      cartStore.removeItem(id);
      Swal.fire({
        title: "✅ បានលុបរួចរាល់",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
      });
    }
  });
};

// ============== លុបទាំងអស់ ==============
const clearAllCart = () => {
  Swal.fire({
    title: "លុបទាំងអស់?",
    text: "មិនអាចត្រឡប់ក្រោយបានទេ!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "លុបទាំងអស់",
    confirmButtonColor: "#ef4444"
  }).then((result) => {
    if (result.isConfirmed) {
      cartStore.clearCart();
    }
  });
};

const handlePlaceOrder = () => {
  if (cartStore.cartItems.length === 0) {
    alert("កន្ត្រកអាហាររបស់អ្នកនៅទទេឡើយ!");
    return;
  }
  
  if (!address.value.trim()) {
    alert("សូមមេត្តាបំពេញអាសយដ្ឋានដឹកជញ្ជូនរបស់អ្នក!");
    return;
  }

  showSuccessModal.value = true;
};

const confirmOrder = () => {
  cartStore.clearCart();
  showSuccessModal.value = false;
  router.push("/");
};
</script>

<template>
  <div class="p-6 bg-zinc-900 min-h-screen text-white relative">
    <div class="flex justify-between items-center">
      <div class="rounded-lg border border-zinc-700 bg-zinc-800 mb-6 hover:bg-transparent duration-200 hover:scale-105 w-fit px-4 py-1.5 cursor-pointer">
        <RouterLink to="/menu" class="flex items-center gap-2">
          <i class="fa-regular fa-hand-point-left"></i> Back
        </RouterLink>
      </div>
      <div class="rounded-lg border border-zinc-700 bg-zinc-800 mb-6 hover:bg-transparent duration-200 hover:scale-105 w-fit px-4 py-1.5 cursor-pointer">
        <RouterLink to="/add">add-product</RouterLink>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl m-auto">
      
      <div class="lg:col-span-2 space-y-6">
        <div class="bg-zinc-800 p-6 rounded-xl border border-zinc-700 shadow-xl">
          <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-emerald-400">
            <i class="fa-solid fa-truck-fast"></i> Delivery Information
          </h2>
          <div class="space-y-2">
            <label class="text-zinc-400 text-sm">Delivery Address</label>
            <input
              v-model="address"
              type="text"
              placeholder="Ex: St 21, Phnom Penh, Cambodia..."
              class="border border-zinc-700 bg-zinc-900 p-3 w-full rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>

        <div class="bg-zinc-800 p-6 rounded-xl border border-zinc-700 shadow-xl">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold">Your Items ({{ cartStore.cartItems.length }})</h2>
            <button v-if="cartStore.cartItems.length > 0" 
                    @click="clearAllCart"
                    class="text-red-400 hover:text-red-500 text-sm flex items-center gap-1">
              <i class="fa-solid fa-trash"></i> លុបទាំងអស់
            </button>
          </div>
          
          <div v-if="cartStore.cartItems.length === 0" class="text-zinc-500 py-4 text-center">
            មិនទាន់មានអាហារនៅក្នុងកន្ត្រកនៅឡើយទេ។
          </div>

          <div v-else class="divide-y divide-zinc-700 max-h-[400px] overflow-y-auto pr-2">
            <div v-for="item in cartStore.cartItems" :key="item.id" 
                 class="flex items-center justify-between py-4 group">
              <div class="flex items-center gap-3">
                <img :src="item.image" :alt="item.name" class="w-12 h-12 rounded-lg object-cover border border-zinc-700">
                <div>
                  <h4 class="font-bold text-zinc-200">{{ item.name }}</h4>
                  <p class="text-zinc-400 text-sm">${{ item.price }} x {{ item.quantity }}</p>
                </div>
              </div>
              
              <div class="flex items-center gap-4">
                <span class="font-bold text-emerald-400">${{ (item.price * item.quantity).toFixed(2) }}</span>
                
                <!-- Delete Button -->
                <button @click="removeFromCart(item.id)" 
                        class="text-red-400 hover:text-red-500 opacity-70 hover:opacity-100 transition-all">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-zinc-800 p-6 rounded-xl border border-zinc-700 shadow-xl h-fit">
        <h2 class="text-2xl font-bold mb-6 border-b border-zinc-700 pb-3">Order Summary</h2>
        
        <div class="space-y-4 text-zinc-300">
          <div class="flex justify-between">
            <span>Subtotal:</span>
            <span class="font-medium text-white">${{ subtotal.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between">
            <span>Delivery Fee:</span>
            <span class="font-medium text-white">${{ deliveryFee.toFixed(2) }}</span>
          </div>
          
          <div class="border-t border-zinc-700 pt-4 flex justify-between text-xl font-bold text-white">
            <span>Total:</span>
            <span class="text-emerald-400">${{ total.toFixed(2) }}</span>
          </div>
        </div>

        <button
          @click="handlePlaceOrder"
          class="w-full bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-bold py-3.5 rounded-lg mt-6 transition-all shadow-lg flex items-center justify-center gap-2 text-lg"
        >
          <i class="fa-solid fa-circle-check"></i> Place Order
        </button>
      </div>

    </div>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div class="bg-zinc-800 border border-zinc-700 rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl">
        <div class="w-20 h-20 bg-emerald-500 bg-opacity-20 text-emerald-400 rounded-full flex items-center justify-center m-auto mb-4 text-4xl">
          <i class="fa-solid fa-check"></i>
        </div>
        
        <h3 class="text-2xl font-bold text-white mb-2">Order Placed!</h3>
        <p class="text-zinc-400 text-sm mb-6">
          ការកុម្ម៉ង់របស់អ្នកទទួលបានជោគជ័យហើយ! 
        </p>

        <button
          @click="confirmOrder"
          class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-lg transition-colors"
        >
          OK, Back to Home
        </button>
      </div>
    </div>
  </div>
</template>