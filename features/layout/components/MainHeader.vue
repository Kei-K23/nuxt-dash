<script setup lang="ts">
const search = ref("");
</script>

<template>
  <header class="py-2 px-6 bg-white w-full flex items-center justify-between">
    <div>
      <UInput v-model="search" placeholder="search..." class="max-w-[350px]" />
    </div>
    <div class="flex items-center gap-x-5">
      <div class="relative">
        <UIcon name="i-heroicons-bell" class="size-6" />
        <UBadge
          class="absolute -top-1 -right-0.5 rounded-full size-4 flex items-center justify-center"
          ><span class="text-xs">5</span></UBadge
        >
      </div>
      <div class="flex items-center gap-x-2">
        <UAvatar size="md" src="/img/user_avatar.png" alt="Avatar" />
        <div class="flex flex-col">
          <span>John Doe</span>
          <span class="text-xs">Admin</span>
        </div>
      </div>
    </div>
  </header>
</template>
