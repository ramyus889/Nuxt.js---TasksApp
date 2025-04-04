<script setup lang="ts">
import type { Task } from "~/types";

const props = defineProps<{ tasks: Task[] }>();

const emits = defineEmits<{
  toggleDone: [id: string];
  removeTask: [id: string];
}>();
</script>
<template>
  <div class="overflow-y-scroll scrollbar h-[320px] sm:h-[470px]">
    <TransitionGroup name="list" tag="div">
      <div v-for="task in props.tasks" :key="task.id" class="mt-5 scroll-auto">
        <div
          class="bg-[#2f30448a] shadow p-5 rounded-2xl flex gap-3 justify-between"
        >
          <label class="flex items-center cursor-pointer gap-3">
            <input
              type="checkbox"
              @input="emits('toggleDone', task.id)"
              :checked="task.done"
              class="w-4 h-4 cursor-pointer"
            />
            <span :class="{ 'line-through': task.done }" class="text-[18px]">
              {{ task.title }}
            </span>
          </label>
          <button
            @click="emits('removeTask', task.id)"
            class="flex items-center justify-center gap-2 border-2 px-5 py-2 rounded-xl"
          >
            <Icon name="mdi:trash-can-outline" size="20" />
          </button>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(300px);
}

.scrollbar::-webkit-scrollbar {
  width: 0px;
  scroll-behavior: smooth;
}
</style>
