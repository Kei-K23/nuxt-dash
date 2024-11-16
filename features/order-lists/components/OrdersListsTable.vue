<script setup lang="ts">
import { PRODUCTS_DATA } from "~/constants";
import DateRangePicker from "./DateRangePicker.vue";

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "orderedCustomerName",
    label: "Customer Name",
  },
  {
    key: "address",
    label: "Address",
  },
  {
    key: "productImage",
    label: "Image",
  },
  {
    key: "productName",
    label: "Product Name",
  },
  {
    key: "orderedDate",
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
  orderedCustomerName: p.orderedCustomerName,
  productName: p.productName,
  address: p.orderLocation,
  productImage: p.productImage,
  orderedDate: p.orderDateTime,
  price: p.price,
  quantity: p.orderQuantity,
  status: p.status,
}));

// Filters
const orderStatus = [
  {
    key: "Shipped",
    label: "Shipped",
    value: "Shipped",
  },
  {
    key: "Delivered",
    label: "Delivered",
    value: "Delivered",
  },
  {
    key: "Processing",
    label: "Processing",
    value: "Processing",
  },
  {
    key: "Cancelled",
    label: "Cancelled",
    value: "Cancelled",
  },
  {
    key: "Pending",
    label: "Pending",
    value: "Pending",
  },
];

const q = ref("");
const page = ref(1);
const pageCount = 15;
const selectedStatus = ref<
  Array<{
    key: string;
    label: string;
    value: string;
  }>
>([]);
const selectedDateRange = ref<{
  start: Date | null;
  end: Date | null;
}>({ start: null, end: null });

const filteredRows = computed(() => {
  let filteredProducts = products;

  // Apply filters
  if (selectedStatus.value.length) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedStatus.value.some((status) => status.value === product.status)
    );
  }

  // Apply search
  if (q.value) {
    filteredProducts = filteredProducts.filter((product) =>
      Object.values(product).some((value) =>
        String(value).toLowerCase().includes(q.value.toLowerCase())
      )
    );
  }

  // Apply date range filter
  if (selectedDateRange.value.start && selectedDateRange.value.end) {
    filteredProducts = filteredProducts.filter((product) => {
      const orderedDate = new Date(product.orderedDate);
      if (selectedDateRange.value.start && selectedDateRange.value.end) {
        return (
          orderedDate >= selectedDateRange.value.start &&
          orderedDate <= selectedDateRange.value.end
        );
      } else {
        return false;
      }
    });
  }

  // Apply pagination
  return filteredProducts.slice(
    (page.value - 1) * pageCount,
    page.value * pageCount
  );
});

const totalFilteredProducts = computed(() => {
  let filteredProducts = products;

  // Apply filters
  if (selectedStatus.value.length) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedStatus.value.some((status) => status.value === product.status)
    );
  }

  // Apply search
  if (q.value) {
    filteredProducts = filteredProducts.filter((product) =>
      Object.values(product).some((value) =>
        String(value).toLowerCase().includes(q.value.toLowerCase())
      )
    );
  }

  // Apply date range filter
  if (selectedDateRange.value.start && selectedDateRange.value.end) {
    filteredProducts = filteredProducts.filter((product) => {
      const orderedDate = new Date(product.orderedDate);
      if (selectedDateRange.value.start && selectedDateRange.value.end) {
        return (
          orderedDate >= selectedDateRange.value.start &&
          orderedDate <= selectedDateRange.value.end
        );
      } else {
        return false;
      }
    });
  }

  return filteredProducts.length;
});

const onReset = () => {
  selectedStatus.value = [];
  q.value = "";
};

watch([q, selectedStatus], () => {
  page.value = 1;
});
</script>

<template>
  <div
    class="flex justify-between items-center w-full py-3.5 border-b border-gray-200 dark:border-gray-700"
  >
    <UInput v-model="q" placeholder="Filter order..." />

    <div class="flex items-center gap-x-2">
      <DateRangePicker
        @update-range="
          (range) => {
            selectedDateRange.start = range.start;
            selectedDateRange.end = range.end;
          }
        "
      />
      <USelectMenu
        v-model="selectedStatus"
        :options="orderStatus"
        multiple
        placeholder="Status"
        class="w-40"
      />
      <UButton @click="onReset" color="gray">Reset</UButton>
    </div>
  </div>
  <div class="bg-white">
    <div>
      <UTable :rows="filteredRows" :columns="columns">
        <template #productImage-data="{ row }">
          <img
            :src="row.productImage"
            :alt="row.productName"
            class="w-[100px] h-[60px]"
          />
        </template>
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
          :total="totalFilteredProducts"
        />
      </div>
    </div>
  </div>
</template>
