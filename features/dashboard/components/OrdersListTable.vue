<script setup lang="ts">
import { PRODUCTS_DATA } from "~/constants";

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "product_name",
    label: "Product Name",
  },
  {
    key: "location",
    label: "Location",
  },
  {
    key: "ordered_date",
    label: "Ordered Date",
  },
  {
    key: "price",
    label: "Price",
  },
  {
    key: "quantity",
    label: "Quantity",
  },
  {
    key: "status",
    label: "Status",
  },
];

const products = PRODUCTS_DATA.map((p, i) => ({
  id: i + 1,
  product_name: p.productName,
  location: p.orderLocation,
  ordered_date: p.orderDateTime,
  price: p.price,
  quantity: p.orderQuantity,
  status: p.status,
}));

const q = ref("");
const page = ref(1);
const pageCount = 5;

const filteredRows = computed(() => {
  if (!q.value) {
    return products.slice((page.value - 1) * pageCount, page.value * pageCount);
  }

  return products
    .slice((page.value - 1) * pageCount, page.value * pageCount)
    .filter((product) => {
      return Object.values(product).some((value) => {
        return String(value).toLowerCase().includes(q.value.toLowerCase());
      });
    });
});
</script>

<template>
  <div class="p-8 bg-white">
    <h2 class="text-xl md:text-2xl">Orders Lists</h2>
    <div>
      <div class="flex py-3.5 border-b border-gray-200 dark:border-gray-700">
        <UInput v-model="q" placeholder="Filter order..." />
      </div>
      <UTable :rows="filteredRows" :columns="columns">
        <template #status-data="{ row }">
          <span
            :class="{
              'text-[#BA29FF] bg-[#BA29FF]/10 px-2 py-1.5 rounded-md':
                row.status === 'Shipped',
              'text-[#00B69B] bg-[#00B69B]/10 px-2 py-1.5 rounded-md':
                row.status === 'Delivered',
              'text-[#6226EF] bg-[#6226EF]/10 px-2 py-1.5 rounded-md':
                row.status === 'Processing',
              'text-[#FFA756] bg-[#FFA756]/10 px-2 py-1.5 rounded-md':
                row.status === 'Pending',
              'text-[#EF3826] bg-[#EF3826]/10 px-2 py-1.5 rounded-md':
                row.status === 'Cancelled',
            }"
            >{{ row.status }}</span
          >
        </template>
      </UTable>

      <div
        class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700"
      >
        <UPagination
          v-model="page"
          :page-count="pageCount"
          :total="products.length"
        />
      </div>
    </div>
  </div>
</template>
