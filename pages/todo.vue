<script setup lang="ts">
import CreateTodoModal from "~/features/todo/components/CreateTodoModal.vue";
import TodoItem from "~/features/todo/components/TodoItem.vue";

let tasks = reactive<
  Array<{
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    isCompleted: boolean;
  }>
>([]);
</script>

<template>
  <section class="mt-5 px-6 flex flex-col">
    <div class="flex justify-between items-center gap-x-3">
      <h2 class="text-xl md:text-3xl font-bold">Todo Lists</h2>
      <CreateTodoModal
        @create-todo="
          (task) => {
            tasks.push(task);
          }
        "
      />
    </div>
    <div class="mt-7 w-full">
      <ul class="space-y-4">
        <TodoItem
          v-for="(task, index) in tasks"
          :key="`${task.title}-${index}`"
          :task="task"
          @delete-task="
            (task) => {
              const index = tasks.findIndex((t) => t.id === task.id);
              if (index !== -1) {
                tasks.splice(index, 1);
              }
            }
          "
          @edit-task="
            (task) => {
              const index = tasks.findIndex((t) => t.id === task.id);
              if (index !== -1) {
                tasks[index] = task;
              }
            }
          "
        />
      </ul>
    </div>
  </section>
</template>
