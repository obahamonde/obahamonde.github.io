<template>
  <canvas ref="canvas" width="400" height="400"></canvas>
</template>

<script setup lang="ts">
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";

Chart.register(...registerables);

const sse = reactive({
  datetime: [] as string[],
  latency: [] as number[],
});

const {
  status,
  data: eventData,
  error,
  close,
  event,
  eventSource,
} = useEventSource("http://localhost:8000/api/latency");

const canvas = ref<HTMLCanvasElement | null>(null);

const emits = defineEmits(["update:latency"]);

watch(
  () => eventData.value,
  (newVal) => {
    if (newVal) {
      sse.datetime.unshift(new Date().toLocaleTimeString());
      sse.latency.unshift(new Date().getTime() - new Date(newVal).getTime());
      emits("update:latency", sse.latency);
    }
  }
);

watch(error, (newVal) => {
  if (newVal) eventSource.value?.close();
});

watch(status, (newVal) => {
  if (newVal === "CLOSED") {
    close();
  }
});

watch(event, (newVal) => {
  if (newVal === "error") {
    close();
  }
});

const data: ChartData = {
  labels: sse.datetime,
  datasets: [
    {
      label: "# of Votes",
      data: sse.latency,
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options: ChartOptions = {
  scales: {
    y: {
      beginAtZero: false,
    },
  },
};

onMounted(() => {
  if (canvas.value) {
    const ctx = canvas.value.getContext("2d");
    if (ctx) {
      new Chart(ctx, {
        type: "line",
        data,
        options,
      });
    }
  }
});
</script>
