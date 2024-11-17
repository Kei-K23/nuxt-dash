<script setup lang="ts">
import type { Member } from "~/types";

defineProps<{
  member: Member;
}>();
</script>

<template>
  <div
    class="w-full h-full shadow-lg border rounded-lg hover:shadow-md transition-all py-4 dark:shadow-gray-800 dark:border-gray-600"
  >
    <div class="flex items-center justify-center">
      <img
        :src="member.profileImage"
        :alt="member.username"
        class="size-[100px] rounded-full object-cover ring-2 ring-emerald-500"
      />
    </div>
    <div class="px-4 mt-4">
      <h2 class="mb-2 text-center font-bold">{{ member.username }}</h2>
      <p class="text-emerald-500 text-center">{{ member.position }}</p>
      <p class="text-gray-500 dark:text-gray-300 text-center">
        {{ member.email }}
      </p>
    </div>
  </div>
</template>
