import { createRouter, createWebHistory } from "vue-router";

import MenuView from "../views/menu/MenuView.vue";
import CartView from "../views/cart/CartView.vue";
import CheckoutView from "../views/checkout/CheckoutView.vue";
import OrderHistoryView from "../views/orders/OrderHistoryView.vue";

const routes = [
  {
    path: "/",
    name: "menu",
    component: MenuView,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckoutView,
  },
  {
    path: "/orders",
    name: "orders",
    component: OrderHistoryView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
