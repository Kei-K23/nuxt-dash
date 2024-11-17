<script setup lang="ts">
import { ref, computed } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  type ChartOptions,
  type ChartData,
} from "chart.js";
import { useIsDarkTheme } from "~/features/layout/hooks/useIsDarkTheme";

const isDark = useIsDarkTheme();

// Register the necessary components for the chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
const chartData = ref<ChartData<"bar">>({
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
      label: "Sales Data",
      data: [600, 590, 800, 401, 506, 600, 777, 300, 200, 100, 101, 400],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
});

// Chart options
const chartOptions = ref<ChartOptions<"bar">>({
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
    class="p-8 shadow-lg border rounded-md h-[450px]"
    :class="isDark && 'border-gray-600 shadow-gray-800'"
  >
    <h2 class="text-xl md:text-2xl">Sales Details</h2>
    <Bar
      :data="chartData"
      :options="chartOptions"
      :class="chartClass"
      class="pb-4"
    />
  </div>
</template>
