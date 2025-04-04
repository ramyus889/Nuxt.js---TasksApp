import type { Task, TaskFilter } from "../types";

export function useTaskFilter(tasks: Ref<Task[]>) {
  const filter = ref<TaskFilter>("All");

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

  function setFilter(value: TaskFilter) {
    filter.value = value;
  }

  return {
    filter,
    filteredTasks,
    setFilter,
  };
}
