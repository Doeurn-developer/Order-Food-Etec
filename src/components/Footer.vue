<template>
  <footer class="bg-zinc-900 text-gray-300 pt-12 pb-8">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
  
        <div>
          <h2 class="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-yellow-400 bg-clip-text text-transparent mb-4">
            KhmerDelight
          </h2>
          <p class="text-gray-400 leading-relaxed">
            រីករាយជាមួយមុខម្ហូបខ្មែរ និងអន្តរជាតិដ៏ឈ្ងុយឆ្ងាញ់។ 
            ការបញ្ជាទិញងាយស្រួល និងលឿនជាងមុន។
          </p>
          <div class="flex gap-4 mt-6">
            <a href="#" class="hover:text-emerald-400 transition-colors"><i class="fa-brands fa-facebook text-2xl"></i></a>
            <a href="#" class="hover:text-emerald-400 transition-colors"><i class="fa-brands fa-instagram text-2xl"></i></a>
            <a href="#" class="hover:text-emerald-400 transition-colors"><i class="fa-brands fa-telegram text-2xl"></i></a>
          </div>
        </div>

     
        <div>
          <h3 class="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul class="space-y-3">
            <li><RouterLink to="/" class="hover:text-emerald-400 transition-colors">ទំព័រដើម</RouterLink></li>
            <li><RouterLink to="/" class="hover:text-emerald-400 transition-colors">មុខម្ហូបខ្មែរ</RouterLink></li>
            <li><RouterLink to="/menu" class="hover:text-emerald-400 transition-colors">មុខម្ហូបបរទេស</RouterLink></li>
            <li><RouterLink to="/checkout" class="hover:text-emerald-400 transition-colors">កន្ត្រក</RouterLink></li>
          </ul>
        </div>

        
        <div>
          <h3 class="text-white font-semibold text-lg mb-4">ទំនាក់ទំនង</h3>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <i class="fa-solid fa-location-dot mt-1 text-emerald-400"></i>
              <div>
                <p>Phnom Penh, Cambodia</p>
                <p class="text-sm text-gray-500">Near Russian Market</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <i class="fa-solid fa-phone text-emerald-400"></i>
              <p>012 345 678 / 098 765 432</p>
            </div>
            <div class="flex items-center gap-3">
              <i class="fa-solid fa-envelope text-emerald-400"></i>
              <p>info@khmerdelight.com</p>
            </div>
          </div>
        </div>

        
        <div>
          <h3 class="text-white font-semibold text-lg mb-4">ម៉ោងបើក</h3>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span>Monday - Friday</span>
              <span class="text-emerald-400">10:00 AM - 10:00 PM</span>
            </div>
            <div class="flex justify-between">
              <span>Saturday - Sunday</span>
              <span class="text-emerald-400">09:00 AM - 11:00 PM</span>
            </div>
            <div class="pt-4 border-t border-zinc-700 text-xs text-gray-500">
              ការបញ្ជាទិញតាមអនឡាញបើក 24/7
            </div>
          </div>
        </div>
      </div>

  
      <div class="border-t border-zinc-800 mt-12 pt-8 text-center text-sm text-gray-500">
        <p>
          &copy; {{ new Date().getFullYear() }} KhmerDelight. All Rights Reserved.
        </p>
        <p class="mt-2">
          បង្កើតឡើងដោយសេចក្តីស្រឡាញ់នៃមុខម្ហូបខ្មែរ 🇰🇭
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>