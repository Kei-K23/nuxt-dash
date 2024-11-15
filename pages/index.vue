<script setup lang="ts">
import DashboardCard from "~/features/dashboard/components/dashboard-card.vue";
import { DASHBOARD_CARDS_DATA } from "~/constants";

const value = ref("");
</script>

<template>
  <div class="mt-5 px-6">
    <h2 class="text-xl md:text-3xl font-bold">Dashboard</h2>
    <div class="mt-7 grid grid-cols-4 gap-x-5">
      <DashboardCard
        v-for="card in DASHBOARD_CARDS_DATA"
        :key="card.name"
        :card="card"
      />
    </div>
  </div>
</template>
