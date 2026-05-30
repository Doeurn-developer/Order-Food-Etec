import { createRouter, createWebHistory } from "vue-router";
import MenuView from "../views/menu/MenuView.vue";
import CheckoutView from "../views/checkout/CheckoutView.vue";
import HomePage from "../views/Home/HomePage.vue";
import AddProduct from "../views/AddFood/AddProduct.vue";
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
  {
    path: "/add",
    name: "add-product",
    component: AddProduct,
  },
 
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
