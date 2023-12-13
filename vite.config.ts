/// <reference types="vitest" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import { resolve } from 'path'
import { ConfigEnv, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import svgr from 'vite-plugin-svgr'
// import dts from "vite-plugin-dts";
// import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig((options: ConfigEnv): any => {
  const defaultConfig: any = {
    plugins: [
      react()
      // svgr()
      // dts(),
      // cssInjectedByJsPlugin({ styleId: "custom-css-px-jo-engagements" }),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/test-setup.ts'
      // css: true,
    }
  }

  if (options.mode === 'R2WC') {
    return {
      ...defaultConfig,
      build: {
        lib: {
          // Could also be a dictionary or array of multiple entry points
          entry: resolve(__dirname, 'lib/r2wc.index.ts'),
          formats: ['es', 'umd'],
          name: 'PX Counter',
          // the proper extensions will be added
          fileName: format => `px-jo-engagements.r2wc.${format}.js`
        },
        outDir: 'dist/r2wc'
      },
      server: {
        open: 'r2wc.index.html'
      },
      define: {
        'process.env.NODE_ENV': '"production"'
      }
    }
  } else {
    return {
      ...defaultConfig,
      build: {
        copyPublicDir: false,
        lib: {
          // Could also be a dictionary or array of multiple entry points
          entry: resolve(__dirname, 'lib/index.ts'),
          formats: ['es'],
          name: 'Px Counter',
          // the proper extensions will be added
          fileName: format => `px-jo-engagements.${format}.js`
        },
        rollupOptions: {
          // make sure to externalize deps that shouldn't be bundled
          // into your library
          external: ['react', 'react/jsx-runtime'],
          output: {
            // Provide global variables to use in the UMD build
            // for externalized deps
            globals: {
              react: 'React'
            }
          }
        },
        outDir: 'dist/rc'
      }
    }
  }
})
