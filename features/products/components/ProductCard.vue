<script setup lang="ts">
import type { Product } from "~/types";
import EditProductModal from "./EditProductModal.vue";
import ViewProductDetail from "./ViewProductDetail.vue";

defineProps<{
  product: Product;
}>();

const emit = defineEmits(["delete-product", "edit-product"]);

const onDelete = (product: Product) => emit("delete-product", product);
</script>

<template>
  <div
    class="w-full h-full shadow-lg border rounded-lg hover:shadow-md transition-all dark:border-gray-600 dark:shadow-gray-800"
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
      <ViewProductDetail :product="product" />
      <EditProductModal
        :product="product"
        @edit-product="
          (product) => {
            emit('edit-product', product);
          }
        "
      />
      <UButton variant="outline" color="red" @click="onDelete(product)"
        >Delete</UButton
      >
    </div>
  </div>
</template>
