import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { chromeExtension, simpleReloader } from 'rollup-plugin-chrome-extension';
import zip from 'rollup-plugin-zip';

export default {
    input: 'src/manifest.ts',
    cache: true,
    output: {
        dir: 'dist',
        format: 'module',
    },
    plugins: [
        chromeExtension(), // must be first
        simpleReloader(),
        typescript(),
        terser(),
        zip({ dir: 'release' }),
    ],
};
