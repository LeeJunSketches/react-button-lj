import fs from "fs";
import path from "path";
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts'
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import tsconfig from './tsconfig.json';

const packageJson = require("./package.json");

const dateFnsDirs = fs
    .readdirSync(path.join(".", "node_modules", "date-fns"))
    .map((d) => `date-fns/${d}`);

export default [
    {
        input: './src/index.ts',
        output: [
            {
                file: './dist/index.esm.js',
                format: 'esm',
            },
            {
                file: './dist/index.js',
                format: 'cjs',
            }
        ],
        plugins: [
            peerDepsExternal(),
            resolve({
                mainFields: ["module"],
                extensions: [".js", ".jsx"],
            }),
            typescript(tsconfig),
            commonjs(),
        ],
        external: Object.keys(packageJson.dependencies)
            .concat(Object.keys(packageJson.peerDependencies))
            .concat(dateFnsDirs),
    },
    {
        input: "./src/ConfigButton.d.ts",
        output: {
            file: "./dist/ConfigButton.d.ts",
            format: "es"
        },
        plugins: [dts()]

    }
]