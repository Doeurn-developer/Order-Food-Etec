<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const router = useRouter()

// Form Data
const form = ref({
  id: Date.now(),
  name: '',
  price: '',
  image: '',
  description: '',
  category: 'Khmer'
})

const isLoading = ref(false)

const addProduct = () => {
  if (!form.value.name || !form.value.price || !form.value.image) {
    Swal.fire({
      title: "⚠️ ព័ត៌មានមិនពេញលេញ",
      text: "សូមបំពេញឈ្មោះមុខម្ហូប, តម្លៃ និងរូបភាព",
      icon: "warning"
    })
    return
  }

  isLoading.value = true

  // រក្សាទុកទៅ Console (អ្នកអាចយកទៅប្រើនៅកន្លែងផ្សេងក្រោយ)
  console.log('✅ មុខម្ហូបថ្មីត្រូវបានបញ្ចូល:', form.value)

  Swal.fire({
    title: "✅ បានបញ្ចូលមុខម្ហូបថ្មី!",
    html: `<strong>${form.value.name}</strong>`,
    icon: "success",
    timer: 2000,
    showConfirmButton: false
  })

  // លុបទិន្នន័យក្នុង Form
  form.value = {
    id: Date.now(),
    name: '',
    price: '',
    image: '',
    description: '',
    category: 'Khmer'
  }

  isLoading.value = false
}
</script>

<template>
  <div class="min-h-screen bg-zinc-100 py-12 px-4">
    <div class="max-w-lg mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

      <!-- Header -->
      <div class="bg-gradient-to-r from-emerald-500 to-cyan-600 p-6 text-white">
        <div class="flex items-center gap-4">
          <button @click="router.go(-1)" class="hover:bg-white/20 p-2 rounded-xl transition">
            <i class="fa-solid fa-arrow-left text-2xl"></i>
          </button>
          <h1 class="text-2xl font-bold">បញ្ចូលមុខម្ហូបថ្មី</h1>
        </div>
      </div>

      <div class="p-8 space-y-6">
        <form @submit.prevent="addProduct">

          <div>
            <label class="block text-gray-700 mb-2 font-medium">ឈ្មោះមុខម្ហូប</label>
            <input v-model="form.name" type="text" placeholder="ឧ. បាយសាម្លាម្ជូរ" 
                   class="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-emerald-500">
          </div>

          <div>
            <label class="block text-gray-700 mb-2 font-medium">តម្លៃ ($)</label>
            <input v-model="form.price" type="number" step="0.1" placeholder="6.50" 
                   class="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-emerald-500">
          </div>

          <div>
            <label class="block text-gray-700 mb-2 font-medium">រូបភាព (Image URL)</label>
            <input v-model="form.image" type="text" placeholder="https://example.com/image.jpg" 
                   class="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-emerald-500">
          </div>

          <div>
            <label class="block text-gray-700 mb-2 font-medium">ប្រភេទ</label>
            <select v-model="form.category" 
                    class="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-emerald-500">
              <option value="Khmer">មុខម្ហូបខ្មែរ</option>
              <option value="Foreign">មុខម្ហូបបរទេស</option>
            </select>
          </div>

          <div>
            <label class="block text-gray-700 mb-2 font-medium">ការពិពណ៌នា</label>
            <textarea v-model="form.description" rows="4" placeholder="ពណ៌នាអំពីមុខម្ហូប..."
                      class="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-emerald-500"></textarea>
          </div>

          <button 
            type="submit"
            :disabled="isLoading"
            class="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-2xl text-lg transition-all flex items-center justify-center gap-2"
          >
            <i class="fa-solid fa-plus"></i>
            {{ isLoading ? 'កំពុងបញ្ចូល...' : 'បញ្ចូលមុខម្ហូបថ្មី' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>