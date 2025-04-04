<script setup lang="ts">
import type { Task, TaskFilter } from "../types";

const message = ref("Tasks App Main");
const tasks = ref<Task[]>([]);
const filter = ref<TaskFilter>("All");

const totalDone = computed(() =>
  tasks.value.reduce((total, task) => (task.done ? total + 1 : total), 0)
);

function addTask(newTask: string) {
  tasks.value.push({
    id: crypto.randomUUID(),
    title: newTask,
    done: false,
  });
}

function toggleDone(id: string) {
  const task = tasks.value.find((task) => task.id === id);
  if (task) {
    task.done = !task.done;
  }
}

const filteredTasks = computed(() => {
  switch (filter.value) {
    case "All":
      return tasks.value;
    case "Done":
      return tasks.value.filter((task) => task.done);
    case "Todo":
      return tasks.value.filter((task) => !task.done);
  }
});

function removeTask(id: string) {
  const index = tasks.value.findIndex((task) => task.id === id);
  if (index !== -1) {
    tasks.value.splice(index, 1);
  }
}

function setFilter(value: TaskFilter) {
  filter.value = value;
}
</script>

<template>
  <div class="max-w-[800px] mx-auto">
    <div
      class="flex sm:flex-row flex-col-reverse gap-3 justify-between w-full items-center"
    >
      <div class="sm:text-5xl text-4xl font-semibold">{{ message }}</div>
      <img
        src="/img/Code/frontend.jpg"
        alt="avatar"
        class="w-20 h-20 rounded-full"
      />
    </div>
    <UseFormSubmit @add-task="addTask" />
    <div
      class="flex sm:flex-row flex-col gap-3 sm:justify-between items-center mt-7 sm:mt-10"
    >
      <div
        v-if="!tasks.length"
        class="sm:text-3xl text-2xl sm:text-start text-center"
      >
        Add a Task to get started
      </div>
      <div v-else class="sm:text-3xl text-2xl sm:text-start text-center">
        {{ totalDone }} / {{ tasks.length }} tasks completed
      </div>
      <div v-if="tasks.length" class="flex gap-3 max-sm:w-full">
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

    <UseTaskList
      :tasks="filteredTasks"
      @toggle-done="toggleDone"
      @remove-task="removeTask"
    />
  </div>
</template>
