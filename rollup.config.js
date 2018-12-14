import buildOptimizer from 'rollup-plugin-angular-optimizer';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import paths from 'rollup-plugin-paths';
import pathMapping from 'rxjs/_esm5/path-mapping';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: `./out-tsc/app/app/app.module.js`,
  output: {
    name: 'hw',
    file: `dist/bundle.js`,
    format: 'iife',
    sourcemap: false
  },
  plugins: [
    paths(pathMapping()),
    nodeResolve({ jsnext: true, module: true }),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs(),
    buildOptimizer(),
    uglify({
      mangle: true,
      compress: {
        global_defs: {
          ngDevMode: false
        },
        keep_fargs: false,
        passes: 3,
        pure_getters: true,
        unsafe: true
      }
    })
  ],
  external: []
};
