<script setup lang="ts">
import { ref, computed } from "vue";

interface InvoiceItem {
  id: number;
  description: string;
  quantity: number;
  price: number;
}

interface Invoice {
  number: string;
  date: string;
  clientName: string;
  clientEmail: string;
  items: InvoiceItem[];
  taxRate: number;
}

const invoice = ref<Invoice>({
  number: "",
  date: new Date().toISOString().split("T")[0],
  clientName: "",
  clientEmail: "",
  items: [],
  taxRate: 10,
});

const invoicePreview = ref<HTMLElement | null>(null);

const addItem = () => {
  invoice.value.items.push({
    id: Date.now(),
    description: "",
    quantity: 1,
    price: 0,
  });
};

const removeItem = (index: number) => {
  invoice.value.items.splice(index, 1);
};

const subtotal = computed(() => {
  return invoice.value.items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
});

const taxAmount = computed(() => {
  return subtotal.value * (invoice.value.taxRate / 100);
});

const total = computed(() => {
  return subtotal.value + taxAmount.value;
});

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

const printInvoice = () => {
  const printContents = invoicePreview.value?.innerHTML;
  const originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents || "";
  window.print();
  document.body.innerHTML = originalContents;
};
</script>

<template>
  <section class="mt-5 px-6">
    <h2 class="text-xl md:text-3xl font-bold">Invoice</h2>
    <div
      class="mt-7 border mx-auto dark:border-gray-600 dark:shadow-gray-800 shadow-xl rounded-lg overflow-hidden"
    >
      <div class="px-2 py-4 sm:p-6">
        <div
          class="w-full grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 mb-6"
        >
          <div class="sm:col-span-3">
            <label
              for="invoiceNumber"
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >Invoice Number</label
            >
            <UInput
              id="invoiceNumber"
              v-model="invoice.number"
              class="mt-1"
              placeholder="Invoice number"
            />
          </div>
          <div class="sm:col-span-3">
            <label
              for="invoiceDate"
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >Invoice Date</label
            >
            <UInput
              id="invoiceDate"
              v-model="invoice.date"
              class="mt-1"
              placeholder="Invoice Date"
              type="date"
            />
          </div>
          <div class="sm:col-span-3">
            <label
              for="clientName"
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >Client Name</label
            >
            <UInput
              id="clientName"
              v-model="invoice.clientName"
              class="mt-1"
              placeholder="Client name"
            />
          </div>
          <div class="sm:col-span-3">
            <label
              for="clientEmail"
              class="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >Client Email</label
            >
            <UInput
              id="clientEmail"
              v-model="invoice.clientEmail"
              class="mt-1"
              type="email"
              placeholder="Client email"
            />
          </div>
        </div>

        <!-- Invoice Items -->
        <div class="mb-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-3">
            Invoice Items
          </h2>
          <div
            v-for="(item, index) in invoice.items"
            :key="index"
            class="flex items-center space-x-4 mb-4"
          >
            <UInput
              v-model="item.description"
              placeholder="Description"
              class="flex-grow"
            />

            <UInput
              type="number"
              v-model="item.quantity"
              placeholder="Qty"
              class="w-28"
            />
            <UInput
              type="number"
              v-model="item.price"
              placeholder="Price"
              class="w-28"
            />
            <UButton
              icon="i-heroicons-trash"
              @click="removeItem(index)"
              color="red"
            >
            </UButton>
          </div>
          <UButton @click="addItem" size="lg" icon="i-heroicons-plus">
            Add Item
          </UButton>
        </div>

        <!-- Totals -->
        <div class="mb-6">
          <div
            class="flex justify-between items-center py-2 border-t border-gray-200 dark:border-gray-600"
          >
            <span class="text-sm font-medium text-gray-500 dark:text-gray-300"
              >Subtotal:</span
            >
            <span
              class="text-sm font-medium text-gray-900 dark:text-gray-100"
              >{{ formatCurrency(subtotal) }}</span
            >
          </div>
          <div
            class="flex justify-between items-center py-2 border-t border-gray-200 dark:border-gray-600"
          >
            <span class="text-sm font-medium text-gray-500 dark:text-gray-300"
              >Tax ({{ invoice.taxRate }}%):</span
            >
            <span
              class="text-sm font-medium text-gray-900 dark:text-gray-100"
              >{{ formatCurrency(taxAmount) }}</span
            >
          </div>
          <div
            class="flex justify-between items-center py-2 border-t border-b border-gray-200 dark:border-gray-600"
          >
            <span class="text-base font-medium text-gray-900 dark:text-gray-100"
              >Total:</span
            >
            <span
              class="text-base font-medium text-gray-900 dark:text-gray-100"
              >{{ formatCurrency(total) }}</span
            >
          </div>
        </div>

        <!-- Actions -->
        <div class="flex justify-end space-x-4">
          <UButton @click="printInvoice" size="lg" icon="i-heroicons-printer">
            Print Invoice
          </UButton>
        </div>
      </div>
    </div>

    <!-- Invoice Preview (for printing) -->
    <div
      ref="invoicePreview"
      class="hidden bg-white p-8 max-w-4xl mx-auto mt-8"
    >
      <h1 class="text-3xl font-bold mb-6">Invoice</h1>
      <div class="mb-6">
        <p><strong>Invoice Number:</strong> {{ invoice.number }}</p>
        <p><strong>Date:</strong> {{ invoice.date }}</p>
        <p><strong>Client:</strong> {{ invoice.clientName }}</p>
        <p><strong>Email:</strong> {{ invoice.clientEmail }}</p>
      </div>
      <table class="w-full mb-6">
        <thead>
          <tr>
            <th class="text-left">Description</th>
            <th class="text-right">Quantity</th>
            <th class="text-right">Price</th>
            <th class="text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in invoice.items" :key="item.id">
            <td>{{ item.description }}</td>
            <td class="text-right">{{ item.quantity }}</td>
            <td class="text-right">{{ formatCurrency(item.price) }}</td>
            <td class="text-right">
              {{ formatCurrency(item.quantity * item.price) }}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="mb-6">
        <p><strong>Subtotal:</strong> {{ formatCurrency(subtotal) }}</p>
        <p>
          <strong>Tax ({{ invoice.taxRate }}%):</strong>
          {{ formatCurrency(taxAmount) }}
        </p>
        <p><strong>Total:</strong> {{ formatCurrency(total) }}</p>
      </div>
    </div>
  </section>
</template>
