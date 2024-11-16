<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import { format } from "date-fns";
import { DatePicker } from "v-calendar";
import type { Todo } from "~/types";

const props = defineProps<{
  task: Todo;
}>();

const emit = defineEmits(["edit-task"]);
const isOpen = ref(false);
const state = ref({
  title: props.task.title,
  description: props.task.description,
  dueDate: props.task.dueDate,
  isCompleted: props.task.isCompleted,
});

const schema = z.object({
  title: z.string().min(3, "Must be at least 3 characters"),
  description: z.string(),
  dueDate: z.date(),
  isCompleted: z.boolean(),
});

type Schema = z.output<typeof schema>;

async function onSubmit(event: FormSubmitEvent<Schema>) {
  isOpen.value = false;
  emit("edit-task", { ...event.data, id: props.task.id });
}
</script>

<template>
  <div>
    <UButton @click="isOpen = true" size="md" color="gray">
      <UIcon name="i-heroicons-pencil-square" class="size-5" />
    </UButton>

    <UModal v-model="isOpen">
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
