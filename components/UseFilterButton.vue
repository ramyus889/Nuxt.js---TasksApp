<script setup lang="ts">
import type { TaskFilter } from "~/types";

const props = defineProps<{ filter: TaskFilter }>();
const emits = defineEmits<{ setFilter: [filter: TaskFilter] }>();
</script>
<template>
  <button
    @click="emits('setFilter', props.filter)"
    class="flex items-center justify-center gap-2 border-2 px-5 py-1.5 max-sm:w-full rounded-xl"
  >
    {{ props.filter }}
  </button>
</template>
