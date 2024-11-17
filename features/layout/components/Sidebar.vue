<script setup lang="ts">
import { NAVIGATION_ITEMS } from "~/constants";
import { useIsDarkTheme } from "../hooks/useIsDarkTheme";

const isDark = useIsDarkTheme();
</script>
<template>
  <div
    class="z-10 fixed w-[200px] h-full py-5 px-2 border-r"
    :class="isDark ? 'border-r-gray-600' : 'border-r-gray-200'"
  >
    <div class="flex items-center justify-center">
      <NuxtLink href="/" class="text-lg md:text-xl font-extrabold"
        ><span class="text-emerald-500">Vue</span>Dash</NuxtLink
      >
    </div>
    <div class="px-1 mt-4">
      <div
        v-for="navigation in NAVIGATION_ITEMS"
        class="space-y-1 mb-3 pb-3 border-b last:border-b-0"
        :class="isDark ? 'border-b-gray-600' : 'border-b-gray-200'"
      >
        <NuxtLink
          active-class="bg-emerald-500 text-white"
          v-for="nav in navigation"
          :href="nav.link"
          class="flex items-center gap-x-2 cursor-pointer px-4 py-1.5 hover:bg-emerald-500 rounded-md hover:text-white transition-all"
        >
          <UIcon :name="nav.icon" class="w-5 h-5" />
          <span class="text-sm">{{ nav.name }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
