<script setup lang="ts">
import type { Product } from "~/types";

defineProps<{ product: Product }>();
const isOpen = ref(false);
</script>

<template>
  <div>
    <UButton variant="soft" @click="isOpen = true">
      <UIcon name="i-heroicons-question-mark-circle" class="size-5" />
    </UButton>
    <UModal v-model="isOpen">
      <img
        :src="product.productImage"
        :alt="product.productName"
        class="w-full h-[220px]"
      />
      <div class="p-4">
        <h2 class="mb-1 font-bold text-xl md:text-2xl">
          {{ product.productName }}
        </h2>
        <UBadge class="mb-3">
          {{ product.category }}
        </UBadge>
        <h4 class="text-blue-400 font-bold">Price: ${{ product.price }}</h4>
        <h4>Total quantity: {{ product.totalQuantity }}</h4>
        <h4>Supplier: {{ product.supplier }}</h4>
        <h4>Production Date: {{ product.productionDate }}</h4>
        <h4>SKU-Code: {{ product.sku }}</h4>
      </div>
    </UModal>
  </div>
</template>
