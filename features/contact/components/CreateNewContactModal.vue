<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

const isOpen = ref(false);
const emit = defineEmits(["create-contact"]);

const schema = z.object({
  username: z.string().min(3, "Must be at least 3 characters"),
  email: z.string().email(),
  phone: z.string(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
  }),
});

type Schema = z.output<typeof schema>;

const state = ref({
  username: "",
  email: "",
  phone: "",
  address: {
    street: "",
    city: "",
    state: "",
    zip: "",
  },
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  emit("create-contact", {
    ...event.data,
    profileImage: "/img/customer1.png",
    id: `${event.data.username}-${new Date().getTime()}`,
  });
  isOpen.value = false;

  state.value = {
    username: "",
    email: "",
    phone: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
    },
  };
}
</script>

<template>
  <div>
    <UButton label="Add New Contact" @click="isOpen = true" />

    <UModal v-model="isOpen">
      <h3 class="text-center mt-4">Create New Contact</h3>
      <div class="p-4">
        <UForm
          :schema="schema"
          :state="state"
          class="space-y-4"
          @submit="onSubmit"
        >
          <UFormGroup label="Customer Name" name="username">
            <UInput v-model="state.username" placeholder="Customer name" />
          </UFormGroup>
          <UFormGroup label="Customer Email" name="email">
            <UInput v-model="state.email" placeholder="Customer email" />
          </UFormGroup>
          <UFormGroup label="Phone" name="phone">
            <UInput v-model="state.phone" placeholder="Customer phone number" />
          </UFormGroup>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <UFormGroup label="State" name="state">
              <UInput v-model="state.address.state" placeholder="State" />
            </UFormGroup>
            <UFormGroup label="City" name="city">
              <UInput v-model="state.address.city" placeholder="City" />
            </UFormGroup>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <UFormGroup label="Street" name="street">
              <UInput v-model="state.address.street" placeholder="Street" />
            </UFormGroup>
            <UFormGroup label="Zip Code" name="zip">
              <UInput v-model="state.address.zip" placeholder="Zip code" />
            </UFormGroup>
          </div>

          <UButton type="submit"> Submit </UButton>
        </UForm>
      </div>
    </UModal>
  </div>
</template>
