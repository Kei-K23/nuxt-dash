<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

const isOpen = ref(false);
const emit = defineEmits(["create-member"]);

const schema = z.object({
  username: z.string().min(3, "Must be at least 3 characters"),
  email: z.string().email(),
  position: z.string(),
});

type Schema = z.output<typeof schema>;

const state = ref({
  username: "",
  email: "",
  position: "",
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  emit("create-member", {
    ...event.data,
    profileImage: "/img/customer1.png",
    id: `${event.data.username}-${new Date().getTime()}`,
  });
  isOpen.value = false;

  state.value = {
    username: "",
    email: "",
    position: "",
  };
}
</script>

<template>
  <div>
    <UButton label="Add New Member" @click="isOpen = true" />

    <UModal v-model="isOpen">
      <h3 class="text-center mt-4">Create New Member</h3>
      <div class="p-4">
        <UForm
          :schema="schema"
          :state="state"
          class="space-y-4"
          @submit="onSubmit"
        >
          <UFormGroup label="Customer Name" name="username">
            <UInput v-model="state.username" placeholder="Member name" />
          </UFormGroup>
          <UFormGroup label="Customer Email" name="email">
            <UInput v-model="state.email" placeholder="Email" />
          </UFormGroup>
          <UFormGroup label="Position" name="position">
            <UInput
              v-model="state.position"
              placeholder="Member job position"
            />
          </UFormGroup>
          <UButton type="submit"> Submit </UButton>
        </UForm>
      </div>
    </UModal>
  </div>
</template>
