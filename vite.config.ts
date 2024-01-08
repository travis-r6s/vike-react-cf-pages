import path from 'node:path'
import React from '@vitejs/plugin-react'
import Vike from 'vike/plugin'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  resolve: {
    alias: {
      '#': path.resolve(__dirname),
    },
  },
  plugins: [
    React(),
    Vike(),
    AutoImport({
      dirs: ['components', 'hooks', 'layouts'],
      imports: [
        'react',
        {
          from: '@types/react',
          imports: ['FC', 'PropsWithChildren'],
          type: true,
        },
        {
          from: 'vike-react/usePageContext',
          imports: ['usePageContext'],
        },
      ],
    }),
  ],
})
