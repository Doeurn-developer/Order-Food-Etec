<script setup lang="ts">
import SlideBar from '../../components/slideBar.vue';

</script>

<template>
    <div>
        <div class="bg-zinc-800 w-full">
            <div class="w-[90%] m-auto flex justify-between" >
                <h1 class="text-white text-xl">Menu</h1>
                <div class="text-white">
                    <RouterLink to="/menu">view all</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>