<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import { format } from "date-fns";
import { DatePicker } from "v-calendar";

defineProps<{
  label: string;
}>();

const isOpen = ref(false);
const emit = defineEmits(["create-todo"]);

const schema = z.object({
  title: z.string().min(3, "Must be at least 3 characters"),
  description: z.string(),
  dueDate: z.date(),
  isCompleted: z.boolean(),
});

type Schema = z.output<typeof schema>;

const state = ref({
  id: "",
  title: "",
  description: "",
  dueDate: new Date(),
  isCompleted: false,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  emit("create-todo", {
    ...event.data,
    id: `${event.data.title}-${new Date().getTime()}`,
  });
  isOpen.value = false;

  state.value = {
    id: "",
    title: "",
    description: "",
    dueDate: new Date(),
    isCompleted: false,
  };
}
</script>

<template>
  <div>
    <UButton :label="label" @click="isOpen = true" />

    <UModal v-model="isOpen">
      <h3 class="text-center mt-4">Create New Task</h3>
      <div class="p-4">
        <UForm
          :schema="schema"
          :state="state"
          class="space-y-4"
          @submit="onSubmit"
        >
          <UFormGroup label="Title" name="title">
            <UInput v-model="state.title" />
          </UFormGroup>

          <UFormGroup label="Description" name="description">
            <UTextarea v-model="state.description" />
          </UFormGroup>

          <UFormGroup name="isCompleted">
            <UCheckbox label="Completed" v-model="state.isCompleted" />
          </UFormGroup>

          <UFormGroup label="Due Date" name="dueDate">
            <UPopover :popper="{ placement: 'bottom-start' }">
              <UButton
                icon="i-heroicons-calendar-days-20-solid"
                :label="format(state.dueDate, 'd MMM, yyy')"
              />
              <template #panel="{ close }">
                <DatePicker
                  v-model="state.dueDate"
                  is-required
                  @close="close"
                />
              </template>
            </UPopover>
          </UFormGroup>

          <UButton type="submit"> Submit </UButton>
        </UForm>
      </div>
    </UModal>
  </div>
</template>
