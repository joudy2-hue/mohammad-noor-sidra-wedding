import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/text_wedding_invitation/",
  build: {
    target: "es2020",
    sourcemap: false
  }
});