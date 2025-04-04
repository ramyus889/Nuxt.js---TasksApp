<template>
  <div
    class="flex sm:flex-row flex-col gap-3 sm:justify-between bg-black py-4 items-center mt-4 sm:mt-6"
  >
    <div
      v-if="tasks && !tasks.length"
      class="sm:text-3xl text-2xl sm:text-start text-center"
    >
      Add a Task to get started
    </div>
    <div v-else class="sm:text-3xl text-xl sm:text-start text-center">
      {{ totalDone }} / {{ tasks?.length ?? 0 }} tasks completed
    </div>
    <div v-if="tasks?.length" class="flex gap-3 max-sm:w-full">
      <UseFilterButton
        :class="{ 'bg-[#3651c9]': filter === 'All' }"
        filter="All"
        @set-filter="setFilter"
      />
      <UseFilterButton
        :class="{ 'bg-[#3651c9]': filter === 'Todo' }"
        filter="Todo"
        @set-filter="setFilter"
      />
      <UseFilterButton
        :class="{ 'bg-[#3651c9]': filter === 'Done' }"
        filter="Done"
        @set-filter="setFilter"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  tasks: Array,
  totalDone: Number,
  filter: String,
});
const emit = defineEmits(["set-filter"]);
const setFilter = (filterValue: string) => {
  emit("set-filter", filterValue);
};
</script>
