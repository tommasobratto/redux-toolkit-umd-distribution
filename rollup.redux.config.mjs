import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";

const config = {
    input: 'node_modules/redux/dist/redux.mjs',
    plugins: [
        getBabelOutputPlugin({
            "presets": ["@babel/preset-env"],
            "plugins": [
                [
                    "@babel/plugin-transform-modules-umd"
                ],
                [
                    "rename-umd-globals",
                    { "unknown": "Redux" }
                ]
            ]
        }),
        nodeResolve(),
        replace({ preventAssignment: true, 'process.env.NODE_ENV': JSON.stringify('production') })
    ],
    output: {
        file: 'umdDist/redux.js',
        format: 'esm'
    }
};

export default config;