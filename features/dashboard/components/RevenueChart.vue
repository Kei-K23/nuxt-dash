<script setup lang="ts">
import { ref, computed } from "vue";
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  type ChartOptions,
  type ChartData,
  LineElement,
  PointElement,
} from "chart.js";
import { useIsDarkTheme } from "~/features/layout/hooks/useIsDarkTheme";

const isDark = useIsDarkTheme();

// Register the necessary components for the chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// Define props
interface Props {
  width?: string;
  height?: string;
}

const props = withDefaults(defineProps<Props>(), {
  width: "w-full",
  height: "h-[300px]",
});

// Chart data
const chartData = ref<ChartData<"line">>({
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Sales",
      data: [600, 590, 800, 401, 506, 600, 777, 300, 200, 100, 101, 400],
      backgroundColor: ["rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgb(255, 99, 132)"],
    },
    {
      label: "Profit",
      data: [690, 690, 900, 551, 506, 200, 177, 400, 300, 200, 701, 200],
      backgroundColor: ["rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgb(54, 162, 235)"],
      borderWidth: 1,
    },
  ],
});

// Chart options
const chartOptions = ref<ChartOptions<"line">>({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
    },
  },
});

const chartClass = computed(() => `${props.width} ${props.height}`);
</script>

<template>
  <div
    class="p-8 shadow-lg border rounded-md h-[350px] md:h-[450px]"
    :class="isDark && 'border-gray-600 shadow-gray-800'"
  >
    <h2 class="text-xl md:text-2xl">Revenue</h2>
    <Line
      :data="chartData"
      :options="chartOptions"
      :class="chartClass"
      class="pb-4"
    />
  </div>
</template>
