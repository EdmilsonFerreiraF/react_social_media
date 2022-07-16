/// <reference types="vitest" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePluginFonts } from 'vite-plugin-fonts'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [react(), tsconfigPaths(), VitePluginFonts({
        google: {
            families: ['Roboto'],
        },
    })],
    test: {
        globals: true
    },
})