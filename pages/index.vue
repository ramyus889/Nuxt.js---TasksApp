<script setup lang="ts">
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useTaskFilter } from "../hooks/useTaskFilter";
import { useTasks } from "../hooks/useTasks";

const { tasks, totalDone, addTask, toggleDone, removeTask } = useTasks();
const { filter, filteredTasks, setFilter } = useTaskFilter(tasks);
useLocalStorage(tasks);
</script>

<template>
  <div class="max-w-[800px] mx-auto">
    <UseHeader />
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
