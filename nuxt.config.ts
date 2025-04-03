// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/icon",
    "@nuxt/image",
    "nuxt-aos",
    "@nuxt/ui",
  ],
  icon: {
    serverBundle: {
      collections: ["mdi"],
    },
  },
  css: ["./css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  aos: {
    duration: 500,
  },
  // app: {
  //   pageTransition: { name: "slide-left", mode: "out-in" },
  // },
});
