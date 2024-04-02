import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';

const config = {
    input: 'node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs',
    plugins: [
        getBabelOutputPlugin({
            "presets": ["@babel/preset-env"],
            "plugins": [
                [
                    "@babel/plugin-transform-modules-umd"
                ],
                [
                    "rename-umd-globals",
                    { "unknown": "RTKQ" }
                ]
            ],
            "targets": [
                "chrome 51"
            ]
        }),
        nodeResolve(),
        replace({ preventAssignment: true, 'process.env.NODE_ENV': JSON.stringify('production') })
    ],
    output: {
        file: 'umdDist/rtk-query.js',
        format: 'esm'
    }
};

export default config;