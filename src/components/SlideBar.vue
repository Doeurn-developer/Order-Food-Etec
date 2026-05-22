<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/style.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const modules = [Autoplay, Pagination, Navigation];
</script>

<template>
  <div class="h-[500px] bg-black mt-16">
    <Swiper
      :modules="modules"
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{ clickable: true }"
      :navigation="true"
      class="h-full w-full"
    >
      <SwiperSlide class="flex items-center justify-center text-white text-4xl">
       <img class="w-full h-full" src="https://i.pinimg.com/736x/a3/5c/34/a35c34a69f8e9128df7ccea8f8d706b9.jpg" alt="">
      </SwiperSlide>

      <SwiperSlide class="flex items-center justify-center text-white text-4xl">
        Slide 2
      </SwiperSlide>
    </Swiper>
  </div>
</template>