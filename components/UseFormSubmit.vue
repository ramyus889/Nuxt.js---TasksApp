<script setup lang="ts">
const newTask = ref("");
const error = ref("");

const emit = defineEmits<{
  addTask: [newTask: string];
}>();

function formSubmitted() {
  if (newTask.value.trim()) {
    emit("addTask", newTask.value.trim());
    newTask.value = "";
  } else {
    error.value = "Task cannot be empty";
  }
}
</script>
<template>
  <form @submit.prevent="formSubmitted" class="sm:mt-10 mt-5">
    <div class="">
      <div class="flex flex-col gap-5">
        <label class="flex flex-col gap-1">
          <span class="font-semibold ps-2">New Task</span>
          <input
            type="text"
            v-model="newTask"
            @input="error = ''"
            :aria-invalid="!!error || undefined"
            placeholder="Add a new task"
            class="border-2 p-3 rounded-xl"
          />
          <small v-if="error" class="text-red-500">{{ error }}</small>
        </label>
      </div>
      <div class="flex sm:justify-end">
        <button
          type="button"
          @click="formSubmitted"
          class="border-2 px-8 py-3 mt-3 max-sm:w-full rounded-xl"
        >
          Add
        </button>
      </div>
    </div>
  </form>
</template>
