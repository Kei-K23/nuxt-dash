<script setup lang="ts">
import { PRODUCTS_DATA } from "~/constants";

const columns = [
  {
    key: "skuCode",
    label: "Sku Code",
  },
  {
    key: "productImage",
    label: "Image",
  },
  {
    key: "productName",
    label: "Name",
  },
  {
    key: "category",
    label: "Category",
  },
  {
    key: "color",
    label: "Color",
  },
  {
    key: "productionDate",
    label: "Production Date",
  },
  {
    key: "price",
    label: "Price",
  },
  {
    key: "totalQuantity",
    label: "Quantity",
  },
];

const products = PRODUCTS_DATA.map((p, i) => ({
  skuCode: p.sku,
  productImage: p.productImage,
  productName: p.productName,
  category: p.category,
  color: p.availableColors,
  productionDate: p.productionDate,
  orderedDate: p.orderDateTime,
  price: p.price,
  totalQuantity: p.totalQuantity,
}));

const q = ref("");
const page = ref(1);
const pageCount = 15;

const filteredRows = computed(() => {
  let filteredProducts = products;

  // Apply search
  if (q.value) {
    filteredProducts = filteredProducts.filter((product) =>
      Object.values(product).some((value) =>
        String(value).toLowerCase().includes(q.value.toLowerCase())
      )
    );
  }

  // Apply pagination
  return filteredProducts.slice(
    (page.value - 1) * pageCount,
    page.value * pageCount
  );
});

const totalFilteredProducts = computed(() => {
  let filteredProducts = products;

  // Apply search
  if (q.value) {
    filteredProducts = filteredProducts.filter((product) =>
      Object.values(product).some((value) =>
        String(value).toLowerCase().includes(q.value.toLowerCase())
      )
    );
  }

  return filteredProducts.length;
});
</script>

<template>
  <div
    class="flex justify-between items-center w-full py-3.5 border-b border-gray-200 dark:border-gray-700"
  >
    <UInput v-model="q" placeholder="Search product..." />
  </div>
  <div class="shadow-lg border rounded-md">
    <div>
      <UTable :rows="filteredRows" :columns="columns">
        <template #productImage-data="{ row }">
          <img
            :src="row.productImage"
            :alt="row.productName"
            class="w-[140px] h-[90px]"
          />
        </template>
        <template #price-data="{ row }">
          <span>${{ row.price }}</span>
        </template>
        <template #color-data="{ row }">
          <div class="flex items-center gap-x-1">
            <!-- TODO: Here use actual render for available color -->
            <span
              v-for="color in row.color"
              class="rounded-full size-4"
              :class="['bg-green-400']"
            />
          </div>
        </template>
      </UTable>

      <div
        class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700"
      >
        <UPagination
          v-model="page"
          :page-count="pageCount"
          :total="totalFilteredProducts"
        />
      </div>
    </div>
  </div>
</template>
