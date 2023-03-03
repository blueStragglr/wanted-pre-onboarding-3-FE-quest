import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import eslintPlugin from 'vite-plugin-eslint'
import UnoCSS from 'unocss/vite'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  build: {
    outDir: resolve(__dirname, '../dist'),
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  plugins: [
    AutoImport({
      dirs: ['src/**/stores'],
      dts: 'src/auto-imports.d.ts',
      imports: [
        'vue',
        'vue-router',
        'pinia',
      ],
    }),
    Components({
      deep: true,
      dirs: ['src/components'],
      dts: true,
      extensions: ['vue', 'ts', 'tsx'],
      include: [/\.vue$/, /\.vue\?vue/],
      types: [
        {
          from: 'vue-router',
          names: ['RouterLink', 'RouterView'],
        },
      ],
    }),
    eslintPlugin(),
    Pages({
      dirs: [
        {
          dir: 'src/pages',
          baseRoute: '',
        },
      ],
      exclude: ['**/components/**/*'],
      extensions: ['vue', 'ts', 'tsx'],
    }),
    UnoCSS(),
    vue(),
  ],
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia'],
  },
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
    },
  },
})
