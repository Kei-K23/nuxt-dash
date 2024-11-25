<script setup lang="ts">
import { PRODUCTS_DATA } from "~/constants";
import CreateNewProductModal from "~/features/products/components/CreateNewProductModal.vue";
import ProductCard from "~/features/products/components/ProductCard.vue";
import type { Product } from "~/types";

let products = reactive<Product[]>(PRODUCTS_DATA);
</script>

<template>
  <section class="mt-5 px-6">
    <div class="flex items-center gap-x-4 justify-between">
      <h2 class="text-xl md:text-3xl font-bold">Products</h2>
      <CreateNewProductModal
        @create-product="
          (product) => {
            products.push(product);
          }
        "
      />
    </div>
    <div
      class="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-6"
    >
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @edit-product="
          (product) => {
            const index = products.findIndex((p) => p.id === product.id);
            if (index !== -1) {
              products[index] = product;
            }
          }
        "
        @delete-product="
          (product) => {
            const index = products.findIndex((p) => p.id === product.id);
            if (index !== -1) {
              products.splice(index, 1);
            }
          }
        "
      />
    </div>
  </section>
</template>
