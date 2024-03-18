# redux-toolkit-umd-distribution

Basic setup to generate a UMD distribution for [Redux Toolkit](https://github.com/reduxjs/redux-toolkit), including core dependencies (Reselect, Immer, Redux-Thunk) and excluding React dependencies.

Scripts inside package.json include specific commands for importing the generated files in our project codebase.
Multiple Rollup configs were required in order to generate separate UMD files.

The generated scripts should be about the same as the v1.9.* Redux Toolkit official development distributions, without minification as that step is managed separately on our side.

The build can be run using: `$ npm install && npm run build`

Output files will be located in the _umdDist_ folder generated after build.
