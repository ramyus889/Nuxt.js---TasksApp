<script setup lang="ts">
useHead({
  title: "Nuxt Task",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "description", content: "Nuxt 3 Frontend Development" },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/img/Code/frontend.jpg" }],
});
</script>
<template>
  <div class="sm:my-[50px] my-[20px] mx-[20px]">
    <slot />
  </div>
</template>
