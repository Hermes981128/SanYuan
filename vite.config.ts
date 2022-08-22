import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite';
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
  server: {
    proxy: {
      "/GetToken": {
        target: "http://140.246.242.45:3030/",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/GetToken/, "")
      },
      "/app/door/open": {
        target: "https://hxq.komect.com/app/door/open",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/app\/door\/open/, "")
      }
    }
  }
})
