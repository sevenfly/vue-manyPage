/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare interface RequestOptions {
  data?: unknown
  params?: unknown
  headers?: AxiosRequestHeaders
}
declare interface Response<T> {
  code: number | string
  msg: string
  message: string
  data: T
  token?: string
}

declare interface Window {
  nativeOpen(url?: string | URL, target?: string, features?: string): Window | null
}

declare const BUILD_TIME: string
