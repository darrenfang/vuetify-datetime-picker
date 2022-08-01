import { createVuePlugin } from 'vite-plugin-vue2';
import viteComponents, {
  VuetifyResolver,
} from 'vite-plugin-components';
import { DatetimeResolver } from './src/resolver'

import path from 'path';

/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  resolve: {
    alias: [
      {
        find: '@/',
        replacement: `${path.resolve(__dirname, './src')}/`,
      },
      {
        find: 'src/',
        replacement: `${path.resolve(__dirname, './src')}/`,
      },
    ],
  },
  plugins: [
    createVuePlugin(),
    viteComponents({
      customComponentResolvers: [
        DatetimeResolver(),
        VuetifyResolver()
      ],
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 8080,
  },
};
