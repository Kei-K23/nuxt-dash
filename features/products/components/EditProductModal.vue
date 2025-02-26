<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import type { Product } from "~/types";

const props = defineProps<{ product: Product }>();

const isOpen = ref(false);
const emit = defineEmits(["edit-product"]);

const schema = z.object({
  productName: z.string().min(3, "Must be at least 3 characters"),
  price: z.number(),
  productionDate: z.string(),
  totalQuantity: z.number(),
  category: z.string(),
  sku: z.string(),
  supplier: z.string(),
  productDescription: z.string(),
});

type Schema = z.output<typeof schema>;

const state = ref({
  productName: props.product.productName,
  price: props.product.price,
  productionDate: props.product.productionDate,
  totalQuantity: props.product.totalQuantity,
  category: props.product.category,
  sku: props.product.sku,
  supplier: props.product.supplier,
  productDescription: props.product.productDescription,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  isOpen.value = false;
  emit("edit-product", {
    ...event.data,
    id: props.product.id,
    productImage: "/img/product_img.png",
    orderDateTime: new Date(),
    orderQuantity: 1,
    orderLocation: "New York, USA",
    orderedCustomerName: "John Doe",
  });
}
</script>

<template>
  <div>
    <UButton variant="outline" @click="isOpen = true">Edit</UButton>
    <UModal v-model="isOpen">
      <h3 class="text-center mt-4">Edit the Product</h3>
      <div class="p-4">
        <UForm
          :schema="schema"
          :state="state"
          class="space-y-4"
          @submit="onSubmit"
        >
          <UFormGroup label="Product Name" name="name">
            <UInput v-model="state.productName" placeholder="Product name" />
          </UFormGroup>
          <UFormGroup label="Price" name="price">
            <UInput type="number" v-model="state.price" placeholder="price" />
          </UFormGroup>
          <UFormGroup label="Production Date" name="productionDate">
            <UInput
              type="date"
              v-model="state.productionDate"
              placeholder="Product production date"
            />
          </UFormGroup>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <UFormGroup label="Total Quantity" name="totalQuantity">
              <UInput
                type="number"
                v-model="state.totalQuantity"
                placeholder="Total Quantity"
              />
            </UFormGroup>
            <UFormGroup label="Category" name="category">
              <UInput v-model="state.category" placeholder="Category" />
            </UFormGroup>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <UFormGroup label="Sku" name="sku">
              <UInput v-model="state.sku" placeholder="Sku" />
            </UFormGroup>
            <UFormGroup label="Supplier name" name="supplier">
              <UInput v-model="state.supplier" placeholder="Supplier name" />
            </UFormGroup>
          </div>
          <UFormGroup label="Product Description" name="productDescription">
            <UTextarea
              v-model="state.productDescription"
              placeholder="Product description"
            />
          </UFormGroup>
          <UButton type="submit"> Submit </UButton>
        </UForm>
      </div>
    </UModal>
  </div>
</template>
