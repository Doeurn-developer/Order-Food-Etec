<script setup lang="ts">
import SlideBar from '../../components/slideBar.vue';
import foodKhmer from "../../data/homeCart.json";
</script>
<template>
    <div>
        <div>
            <SlideBar/>
        </div>
        <div class="bg-zinc-200 m-auto h-[900px] w-[99%] p-5">
            <div class="w-[90%] m-auto flex justify-between items-center" >
                <h1 class="text-4xl mt-4 bg-gradient-to-r from-emerald-300 hover:scale-105 route1 to-emerald-600 bg-clip-text font-bold text-transparent underline">Menu Food Khmer</h1>
                
                <div class="text-white mt-4 border bg-red-500 hover:bg-transparent hover:border-blue-500 duration-300 py-1 px-4 rounded-md">
                    <RouterLink to="/menu"> Food Foreign</RouterLink>
                </div>
            </div>
            <div  class="grid md:grid-cols-4 gap-3 grid-cols-1 w-[90%] m-auto mt-7 ">
                    <div v-for="food in foodKhmer" :key="index" class="rounded-md h-[330px] pb-4 hover:scale-105 duration-200 shadow-md border border-yellow-500 p-2">
                        <div class="h-[60%]">
                            <img class="w-full h-full rounded-md" :src="food.image" alt="">
                        </div>
                        <div class="mt-2 text-xl font-bold text-center">
                            <p>{{ food.name }}</p>
                            <p class="font-normal mt-3 text-red-500 ">Price ${{ food.price }}</p>
                        </div>
                        <div class="bg-blue-400 mt-2 w-fit m-auto px-2 hover:bg-blue-700 duration-300 rounded-md">
                            <button class="text-center py-1 text-white ">Add to card</button>
                        </div>
                    </div>
                    
            </div>
        </div>
    </div>
</template>