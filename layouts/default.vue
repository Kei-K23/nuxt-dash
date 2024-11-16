<script setup lang="ts">
import MainHeader from "~/features/layout/components/MainHeader.vue";
import Sidebar from "~/features/layout/components/Sidebar.vue";
</script>

<template>
  <main class="w-full flex h-full">
    <Sidebar />
    <div class="flex-1 h-full pl-[200px] pb-10">
      <MainHeader />
      <slot />
    </div>
  </main>
</template>
