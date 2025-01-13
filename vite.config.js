import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

// tailwindcss 配置
import tailwindcss from  'tailwindcss'
import autoprefixer from 'autoprefixer'

const pathSrc = resolve(__dirname, './src')
export default defineConfig({
  plugins: [
    vue(),
    // 自动导入 ElementPlus 组件
    AutoImport({
      // imports 的作用是配置需要自动导入的 API，这里配置了 vue、vue-router、pinia 三个 API
      imports: ['vue', 'vue-router', 'pinia'], // 自动导入的 API
      resolvers: [ElementPlusResolver()],
    }),
    // 按需导入 ElementPlus 组件
    Components({
      dts: true, // 自动生成 .d.ts 类型文件
      dirs: ["src/components", "src/**/components"], // 指定组件目录,按需导入组件
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })], // ElementPlus按需加载
    })
  ],
  // 配置别名
  resolve: {
    alias: {
      '@': pathSrc,
    }
  },
  // css预处理器配置
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    },
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true
      },
      scss: {
        // 自动导入定制化样式文件进行样式覆盖
        additionalData: `@use "@/style/element/index.scss" as *;`,
        javascriptEnabled: true,
      }
    },
  },
  // 配置代理
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    // proxy: {
    //   '/api': {
    //     target: env.VITE_API_URL,
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // },
  },
  // optimizeDeps 用于配置 Vite 在构建时需要优化的依赖库，确保这些库会被提前处理，从而提高开发构建和启动的速度。
  optimizeDeps: {
    include: ["vue", "vue-router", "axios", "pinia"]
  },
  // build 构建配置
  build: {
    target: 'modules', // 打包成 es2015 模块
    outDir: 'dist', // 输出目录
    assetsDir: 'assets', // 静态资源目录
    // cssCodeSplit: true, // 开启 css 代码分割
    // sourcemap: false, // 关闭 sourcemap
    rollupOptions: { // 构建配置
      minify: 'terser', // 压缩代码,混淆器，terser构建后文件体积更小
      output: {
        // 资源文件名格式
        chunkFileNames: 'assets/js/[name]-[hash].js', // 代码分割文件名
        entryFileNames: 'assets/js/[name]-[hash].js', // 入口文件名
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]', // 资源文件名
        manualChunks(id) { // 按需加载
          if (id.includes('node_modules')) {// 第三方库,按需加载
            return id.toString().split('node_modules/')[1].split('/')[0].toString(); // 按模块分割
          }
        },

      }
    }
  },
})
