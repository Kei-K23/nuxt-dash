<script setup lang="ts">
import Sidebar from "~/features/layout/components/Sidebar.vue";
</script>

<template>
  <main class="h-screen flex bg-[#F5F6FA]">
    <Sidebar />
    <div>
      <slot />
    </div>
  </main>
</template>
