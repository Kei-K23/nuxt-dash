<script setup lang="ts">
const value = ref("");
</script>

<template>
  <div>
    <h1 class="text-red-500 text-xl">Welcome to the homepage</h1>
    <UButton>Button</UButton>
    <UCheckbox default-value />
    <UInput v-model="value" />
  </div>
</template>
