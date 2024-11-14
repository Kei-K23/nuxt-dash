<script setup lang="ts">
import MainHeader from "~/features/layout/components/MainHeader.vue";
import Sidebar from "~/features/layout/components/Sidebar.vue";
</script>

<template>
  <main class="h-screen w-full flex bg-[#F5F6FA]">
    <Sidebar />
    <div class="flex-1">
      <MainHeader />
      <slot />
    </div>
  </main>
</template>
