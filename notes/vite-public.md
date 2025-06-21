```js
import { defineConfig, loadEnv } from 'vite';
import vue2 from '@vitejs/plugin-vue2';
import path from 'path';
import circleDependency from 'vite-plugin-circullar-dependency';

import { config } from 'dotenv';
config();

let DevServerPort = 8088;

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    base: '',
    server: {
      port: DevServerPort,
    },
    plugins: [
      vue2(),
      circleDependency(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      extensions: ['.js', '.vue'],
    },
    publicDir: process.env.VITE_APP_PUBLIC || 'public',
  });
};
```