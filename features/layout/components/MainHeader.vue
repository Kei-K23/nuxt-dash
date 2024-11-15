<script setup lang="ts">
const search = ref("");
</script>

<template>
  <header
    class="sticky top-0 z-10 py-2 px-6 bg-white w-full flex items-center justify-between border-b border-b-gray-200"
  >
    <div>
      <UInput v-model="search" placeholder="search..." class="w-[280px]" />
    </div>
    <div class="flex items-center gap-x-5">
      <div class="relative">
        <UIcon name="i-heroicons-bell" class="size-6" />
        <UBadge
          class="absolute -top-1 -right-0.5 rounded-full size-4 flex items-center justify-center"
          ><span class="text-xs">5</span></UBadge
        >
      </div>
      <div class="flex items-start gap-x-2">
        <UAvatar
          size="md"
          src="/img/user_avatar.png"
          alt="Avatar"
          class="size-12"
        />
        <div class="flex flex-col">
          <span>John Doe</span>
          <span class="text-xs">Admin</span>
        </div>
      </div>
    </div>
  </header>
</template>
