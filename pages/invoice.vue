<template>
  <div class="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
    <div
      class="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden"
    >
      <div class="px-4 py-5 sm:p-6">
        <h1 class="text-3xl font-bold text-gray-900 mb-6">Invoice Maker</h1>

        <!-- Invoice Details Form -->
        <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 mb-6">
          <div class="sm:col-span-3">
            <label
              for="invoiceNumber"
              class="block text-sm font-medium text-gray-700"
              >Invoice Number</label
            >
            <input
              type="text"
              id="invoiceNumber"
              v-model="invoice.number"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div class="sm:col-span-3">
            <label
              for="invoiceDate"
              class="block text-sm font-medium text-gray-700"
              >Invoice Date</label
            >
            <input
              type="date"
              id="invoiceDate"
              v-model="invoice.date"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div class="sm:col-span-3">
            <label
              for="clientName"
              class="block text-sm font-medium text-gray-700"
              >Client Name</label
            >
            <input
              type="text"
              id="clientName"
              v-model="invoice.clientName"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div class="sm:col-span-3">
            <label
              for="clientEmail"
              class="block text-sm font-medium text-gray-700"
              >Client Email</label
            >
            <input
              type="email"
              id="clientEmail"
              v-model="invoice.clientEmail"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
            <input
              type="text"
              v-model="item.description"
              placeholder="Description"
              class="flex-grow border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <input
              type="number"
              v-model="item.quantity"
              placeholder="Qty"
              class="w-20 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <input
              type="number"
              v-model="item.price"
              placeholder="Price"
              class="w-24 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <button
              @click="removeItem(index)"
              class="text-red-600 hover:text-red-800"
            >
              <UIcon name="i-heroicons-trash" class="h-5 w-5" />
            </button>
          </div>
          <button
            @click="addItem"
            class="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <UIcon name="i-heroicons-plus" class="h-5 w-5 mr-2" />
            Add Item
          </button>
        </div>

        <!-- Totals -->
        <div class="mb-6">
          <div
            class="flex justify-between items-center py-2 border-t border-gray-200"
          >
            <span class="text-sm font-medium text-gray-500">Subtotal:</span>
            <span class="text-sm font-medium text-gray-900">{{
              formatCurrency(subtotal)
            }}</span>
          </div>
          <div
            class="flex justify-between items-center py-2 border-t border-gray-200"
          >
            <span class="text-sm font-medium text-gray-500"
              >Tax ({{ invoice.taxRate }}%):</span
            >
            <span class="text-sm font-medium text-gray-900">{{
              formatCurrency(taxAmount)
            }}</span>
          </div>
          <div
            class="flex justify-between items-center py-2 border-t border-b border-gray-200"
          >
            <span class="text-base font-medium text-gray-900">Total:</span>
            <span class="text-base font-medium text-gray-900">{{
              formatCurrency(total)
            }}</span>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex justify-end space-x-4">
          <button
            @click="printInvoice"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <PrinterIcon class="h-5 w-5 mr-2" />
            Print Invoice
          </button>
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
  </div>
</template>

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
