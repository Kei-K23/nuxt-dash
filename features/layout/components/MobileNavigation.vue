<script setup lang="ts">
import { NAVIGATION_ITEMS } from "~/constants";

const isOpen = ref(false);
</script>

<template>
  <UButton label="Open" @click="isOpen = true" />

  <USlideover v-model="isOpen">
    <div class="p-4 flex-1">
      <UButton
        color="gray"
        variant="ghost"
        size="sm"
        icon="i-heroicons-x-mark-20-solid"
        class="flex sm:hidden absolute end-5 top-5 z-10"
        square
        padded
        @click="isOpen = false"
      />
      <div class="py-5">
        <div class="flex items-center justify-center">
          <NuxtLink href="/" class="text-lg md:text-xl font-extrabold"
            ><span class="text-emerald-500">Vue</span>Dash</NuxtLink
          >
        </div>
        <div class="px-1 mt-4">
          <div
            v-for="navigation in NAVIGATION_ITEMS"
            class="space-y-1 mb-3 pb-3 border-b last:border-b-0 dark:border-b-gray-600 border-b-gray-200"
          >
            <NuxtLink
              active-class="bg-emerald-500 text-white"
              v-for="nav in navigation"
              :href="nav.link"
              @click="isOpen = false"
              class="flex items-center gap-x-2 cursor-pointer px-4 py-1.5 hover:bg-emerald-500 rounded-md hover:text-white transition-all"
            >
              <UIcon :name="nav.icon" class="w-5 h-5" />
              <span class="text-sm">{{ nav.name }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </USlideover>
</template>
