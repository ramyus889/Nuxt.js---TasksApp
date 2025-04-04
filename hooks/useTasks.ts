import type { Task } from "../types";

export function useTasks() {
  const tasks = ref<Task[]>([]);

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

  function removeTask(id: string) {
    const index = tasks.value.findIndex((task) => task.id === id);
    if (index !== -1) {
      tasks.value.splice(index, 1);
    }
  }

  return {
    tasks,
    totalDone,
    addTask,
    toggleDone,
    removeTask,
  };
}
