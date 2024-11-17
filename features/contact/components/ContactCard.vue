<script setup lang="ts">
import type { Contact } from "~/types";

defineProps<{
  contact: Contact;
}>();
</script>

<template>
  <div
    class="w-full h-full shadow-lg border rounded-lg hover:shadow-md transition-all dark:border-gray-600 dark:shadow-gray-800"
  >
    <img
      :src="contact.profileImage"
      :alt="contact.username"
      class="h-[200px] w-full rounded-t-lg"
    />
    <div class="px-4 mt-4">
      <h2 class="mb-2 text-center font-bold">{{ contact.username }}</h2>
      <p class="text-blue-400 text-center">{{ contact.email }}</p>
      <p class="text-blue-400 text-center">{{ contact.phone }}</p>
      <p class="text-center text-gray-500 dark:text-gray-300 mt-2">
        {{ contact.address.street }} ({{ contact.address.city }})
      </p>
    </div>
    <div class="px-4 mt-4 mb-5 flex items-center justify-center gap-x-2">
      <UButton variant="outline" icon="i-heroicons-envelope"> Message</UButton>
    </div>
  </div>
</template>
