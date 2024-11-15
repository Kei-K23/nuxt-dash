<script setup lang="ts">
import { DASHBOARD_CARDS_DATA } from "~/constants";
import DashboardCard from "~/features/dashboard/components/DashboardCard.vue";
import RevenueChart from "~/features/dashboard/components/RevenueChart.vue";
import SalesDetailChart from "~/features/dashboard/components/SalesDetailChart.vue";

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
    <div class="mt-7">
      <SalesDetailChart />
    </div>
    <div class="mt-7">
      <RevenueChart />
    </div>
  </div>
</template>
