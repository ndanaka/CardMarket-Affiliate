import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

// Load SSL certificates
const key = fs.readFileSync(path.resolve(__dirname, "certs/key.pem"));
const cert = fs.readFileSync(path.resolve(__dirname, "certs/cert.pem"));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: key,
      cert: cert,
    },
    port: 5173, // You can change the port if needed
  },
});
