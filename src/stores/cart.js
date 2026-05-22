import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [],
  }),

  getters: {
    totalPrice: (state) =>
      state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      ),
  },

  actions: {
    addToCart(food) {
      const existing = this.cartItems.find((item) => item.id === food.id);

      if (existing) {
        existing.quantity++;
      } else {
        this.cartItems.push({
          ...food,
          quantity: 1,
        });
      }
    },

    removeItem(id) {
      this.cartItems = this.cartItems.filter((item) => item.id !== id);
    },

    clearCart() {
      this.cartItems = [];
    },
  },
});
