<template>
  <div class="max-w-[800px] mx-auto">
    <UseHeader :message="message" />
    <UseFormSubmit @add-task="addTask" />
    <UseTaskInfo
      :tasks="tasks"
      :total-done="totalDone"
      :filter="filter"
      @set-filter="setFilter"
    />
    <UseTaskList
      :tasks="filteredTasks"
      @toggle-done="toggleDone"
      @remove-task="removeTask"
    />
  </div>
</template>

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

// Загрузка задач из localStorage при монтировании
onMounted(() => {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    tasks.value = JSON.parse(savedTasks);
  }
});

// Сохранение задач в localStorage при изменении списка задач
watch(
  tasks,
  (newTasks) => {
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  },
  { deep: true }
);
</script>
