import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import strip from '@rollup/plugin-strip'
import eslintPlugin from 'vite-plugin-eslint'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import DevTools from 'vite-plugin-vue-devtools'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
import { resolve, join } from 'path'
import { glob } from 'glob'
import Inspect from 'vite-plugin-inspect'
const plugins = [
  vue(),
  Inspect(),
  AutoImport({
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/ // .vue
    ],
    dts: './src/auto-imports.d.ts',
    imports: ['vue', 'pinia', 'vue-router'],
    eslintrc: {
      enabled: false, // Default `false`
      filepath: './.eslintrc-auto-import.json',
      globalsPropValue: true
    },
    resolvers: [ElementPlusResolver()]
  }),
  Components({
    dts: './src/components.d.ts',
    dirs: ['src/components/'],
    extensions: ['vue'],
    include: [/\.vue$/, /\.vue\?vue/],
    resolvers: [ElementPlusResolver({ importStyle: 'sass' })]
  }),
  eslintPlugin({
    emitWarning: false
  }),
  ElementPlus({
    useSource: true
  }),
  DevTools()
]
if (process.env.NODE_ENV === 'production') {
  plugins.push(
    ...[
      strip({
        include: ['**/*.(js|ts|vue)'],
        functions: ['assert.*']
      })
    ]
  )
}
const getEntryPath = () => {
  const pageEntry: any = {}
  const _colorG: string = '\x1b[32m%s\x1b[0m'
  const _colorR: string = '\x1b[31m%s\x1b[0m'
  const htmlArr: Array<string> = glob.sync('./**.html')
  const _html: string = process.argv[4]
  if (_html) {
    if (htmlArr.includes(_html + '.html')) {
      console.log(_colorG, `argv ${_html}`)
      console.log(_colorG, `build ${_html}.html`)
      pageEntry[_html] = join(process.cwd(), `/${_html}.html`)
    } else {
      console.log(_colorR, `build:one 参数错误：${_html}`)
    }
  } else {
    htmlArr.forEach((entry: string) => {
      const pathArr: string = entry.split('/')
      const name: string = pathArr[0]
      pageEntry[name] = join(process.cwd(), `/${name}`)
      console.log(_colorG, `build ${name}`)
    })
  }

  return pageEntry
}
export default defineConfig({
  base: './',
  plugins,
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/mixin.scss" as *;@use "@/assets/styles/ele.scss" as *;`
      }
    }
  },
  define: {
    'process.env': { NODE_ENV: process.env.NODE_ENV },
    BUILD_TIME: JSON.stringify(new Date().toLocaleString())
  },
  build: {
    outDir: resolve(process.cwd(), 'dist'),
    sourcemap: false,
    chunkSizeWarningLimit: 1500,
    assetsDir: 'static',
    minify: 'esbuild',
    assetsInlineLimit: 10000,
    cssTarget: 'chrome61',
    rollupOptions: {
      input: getEntryPath(),
      output: {
        compact: true
      }
    }
  },
  server: {
    host: 'dev.se.360.cn',
    port: 3002,
    open: false
  }
})
