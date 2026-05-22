<script setup>
import { formatCurrency } from "../../../utils/formatCurrency";

defineProps({
  item: Object,
});
</script>

<template>
  <div class="flex justify-between border-b py-3">
    <div>
      <h2>{{ item.name }}</h2>
      <p>Qty: {{ item.quantity }}</p>
    </div>

    <p>
      {{ formatCurrency(item.price * item.quantity) }}
    </p>
  </div>
</template>