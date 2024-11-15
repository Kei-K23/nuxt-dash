<script setup lang="ts">
import type { DashboardCard } from "~/types";

defineProps<{ card: DashboardCard }>();
</script>

<template>
  <div class="bg-white p-4 rounded-lg">
    <div class="flex items-center justify-between gap-x-4">
      <div class="flex flex-col gap-y-2">
        <span class="text-balance text-gray-500 md:text-lg">{{
          card.name
        }}</span>
        <span class="font-bold text-2xl md:text-[28px]">{{ card.price }}</span>
      </div>
      <UIcon
        :name="card.icon"
        class="size-12"
        :class="{
          'text-[#8280FF]': card.name === 'Total User',
          'text-[#FEC53D]': card.name === 'Total Order',
          'text-[#4AD991]': card.name === 'Total Sales',
          'text-[#FF9066]': card.name === 'Total Pending',
        }"
      />
    </div>
    <div class="flex items-center gap-x-2 mt-5">
      <UIcon
        :name="card.percentageIcon"
        class="size-6"
        :class="{ 'text-green-500': card.isUp, 'text-red-500': !card.isUp }"
      />
      <span
        :class="{ 'text-green-500': card.isUp, 'text-red-500': !card.isUp }"
        >{{ card.percentage }}</span
      >
      <span>{{ card.percentageText }}</span>
    </div>
  </div>
</template>
