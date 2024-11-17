<script setup lang="ts">
import { format } from "date-fns";
import type { Todo } from "~/types";
import EditTodoModal from "./EditTodoModal.vue";

const emit = defineEmits(["delete-task", "edit-task"]);

defineProps<{
  task: Todo;
}>();

const onDelete = (task: Todo) => emit("delete-task", task);
</script>

<template>
  <li
    class="shadow-lg hover:border-emerald-500 transition-all border-2 rounded-lg px-6 py-4 dark:border-gray-600 dark:shadow-gray-800"
  >
    <div class="gap-x-4 flex items-center justify-between">
      <div class="flex items-center gap-x-3">
        <UCheckbox v-model="task.isCompleted" :ui="{ base: 'size-6' }" />
        <div>
          <div class="flex items-center gap-x-2">
            <h3
              class="text-lg md:text-xl font-semibold"
              :class="[task.isCompleted && 'line-through']"
            >
              {{ task.title }} {{ " " }}
              <span class="font-normal text-base"
                >(Due Date - {{ format(task.dueDate, "d MMM, yyy") }})</span
              >
            </h3>
          </div>
          <p class="mt-1">{{ task.description }}</p>
        </div>
      </div>
      <div class="flex items-center gap-x-3">
        <EditTodoModal
          :task="task"
          @edit-task="
            (task) => {
              emit('edit-task', task);
            }
          "
        />
        <UButton color="red" size="md" @click="onDelete(task)">
          <UIcon name="i-heroicons-trash" class="size-5" />
        </UButton>
      </div>
    </div>
  </li>
</template>
