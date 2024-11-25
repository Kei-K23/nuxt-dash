<script setup lang="ts">
import { useIsDarkTheme } from "~/features/layout/hooks/useIsDarkTheme";
import type { Product } from "~/types";

defineProps<{
  product: Product;
}>();

const isDark = useIsDarkTheme();
</script>

<template>
  <div
    class="w-full h-full shadow-lg border rounded-lg hover:shadow-md transition-all"
    :class="isDark && 'border-gray-600 shadow-gray-800'"
  >
    <img
      :src="product.productImage"
      :alt="product.productName"
      class="h-[200px] w-full rounded-t-lg"
    />
    <div class="px-4">
      <h2 class="mb-1 font-bold">{{ product.productName }}</h2>
      <UBadge size="sm" class="mb-3">
        {{ product.category }}
      </UBadge>
      <h4 class="text-blue-400">${{ product.price }}</h4>
      <h4 class="block">Total quantity: {{ product.totalQuantity }}</h4>
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
