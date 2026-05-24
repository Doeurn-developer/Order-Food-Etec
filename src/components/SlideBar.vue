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
  <div class="h-[500px] bg-black mt-16 ">
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
      <SwiperSlide class="flex items-center justify-center text-white text-4xl relative">
       <img class="w-full h-full relative" src="https://dcassetcdn.com/design_img/3972348/22790/27176200/0ex7smr2x3ywtsefye9cpskg5j_image.png" alt="">
      </SwiperSlide>   
    </Swiper>
    
  </div>
</template>