<script setup lang="ts">
import { PRODUCTS_DATA } from "~/constants";
import ProductCard from "~/features/products/components/ProductCard.vue";
</script>

<template>
  <section class="mt-5 px-6">
    <h2 class="text-xl md:text-3xl font-bold">Products</h2>
    <div class="mt-7 grid grid-cols-4 gap-x-5 gap-y-6">
      <ProductCard
        v-for="product in PRODUCTS_DATA"
        :key="product.productName"
        :product="product"
      />
    </div>
  </section>
</template>
