import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Đặt base là './' hoặc '/Tên-Repo-Của-Bạn/' để sửa lỗi 404 khi deploy lên Github Pages
  base: "/Single-Page-CV/",
});
