import { createRouter, createWebHistory } from "vue-router";
import MenuView from "../views/menu/MenuView.vue";
import CheckoutView from "../views/checkout/CheckoutView.vue";
import HomePage from "../views/Home/HomePage.vue";
const routes = [
   {
    path: "/",
    name:' Home',
    component:HomePage
  },
  {
    path: "/menu",
    name: "menu",
    component: MenuView,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckoutView,
  },
 
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
