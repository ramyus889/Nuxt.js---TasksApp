export function useLocalStorage(tasks: Ref<any[]>) {
  onMounted(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      tasks.value = JSON.parse(savedTasks);
    }
  });

  watch(
    tasks,
    (newTasks) => {
      localStorage.setItem("tasks", JSON.stringify(newTasks));
    },
    { deep: true }
  );
}
