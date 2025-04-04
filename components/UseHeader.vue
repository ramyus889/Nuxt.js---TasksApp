<template>
  <div
    class="flex sm:flex-row flex-col-reverse gap-3 justify-between w-full items-center"
  >
    <div class="sm:text-5xl text-4xl font-semibold">{{ message }}</div>
    <img :src="image" alt="avatar" class="w-20 h-20 rounded-full" />
  </div>
</template>

<script setup lang="ts">
const image = "/img/Code/frontend.jpg";


const message = ref("Tasks App Main");

</script>
