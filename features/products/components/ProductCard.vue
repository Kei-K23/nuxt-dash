<script setup lang="ts">
import type { Product } from "~/types";

defineProps<{
  product: Product;
}>();
</script>

<template>
  <div
    class="w-full h-full shadow-lg border rounded-lg hover:shadow-md transition-all"
  >
    <img
      :src="product.productImage"
      :alt="product.productName"
      class="h-[200px] w-full"
    />
    <div class="px-4">
      <h2 class="mb-2 font-bold">{{ product.productName }}</h2>
      <span class="text-blue-500">${{ product.price }}</span>
      <span class="block">Total quantity: {{ product.totalQuantity }}</span>
    </div>
    <div class="px-4 mt-4 mb-5 flex items-center gap-x-2">
      <UButton variant="soft">
        <UIcon name="i-heroicons-heart" class="size-5" />
      </UButton>
      <UButton variant="outline">Edit</UButton>
      <UButton variant="outline" color="red">Delete</UButton>
    </div>
  </div>
</template>
