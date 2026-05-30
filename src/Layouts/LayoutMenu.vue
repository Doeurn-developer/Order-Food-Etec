<script setup >
import AppNavbar from "@/components/AppNavbar.vue"
import Footer from '../components/Footer.vue';
</script>

<template>
    <div>
        <AppNavbar/>
        <div class="mt-16">
    <RouterView/>
  </div>
  <Footer/>
    </div>
</template>