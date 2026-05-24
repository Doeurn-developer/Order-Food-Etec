<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import Banner1 from "../assets/image/Banner01.jpg"
import Banner2 from "../assets/image/Banner02.jpg"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/style.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const modules = [Autoplay, Pagination, Navigation];
</script>

<template>
  <div class="h-[500px] w-[90%] m-auto  mt-16 ">
    <Swiper
      :modules="modules"
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
       
      }"
      :pagination="{ clickable: true }"
     
      class="h-full w-full"
    >
      <SwiperSlide class="flex items-center justify-center text-white text-4xl relative">
       <img class="w-full h-full relative" :src="Banner1" alt="">
      </SwiperSlide>   
      <SwiperSlide class="flex items-center justify-center text-white text-4xl relative">
       <img class="w-full h-full relative" :src="Banner2" alt="">
      </SwiperSlide>   
    </Swiper>
    
  </div>
</template>