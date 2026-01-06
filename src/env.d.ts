/// <reference types="vite/client" />
import 'vue-router'

declare module '*.scss' {
  const content: Record<string, string>
  export default content
}

declare module 'vue-router' {
  interface RouteMeta {
    /**
     * Controls the AppShell view mode.
     * Determines whether the global header renders in 'System' or 'Mockup' mode.
     */
    view?: 'system' | 'mockup'
  }
}