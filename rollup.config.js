import babel from "rollup-plugin-babel"
import resolve from "@rollup/plugin-node-resolve"
import external from "rollup-plugin-peer-deps-external"
import { terser } from "rollup-plugin-terser"
import postcss from "rollup-plugin-postcss"

export default [
	{
		input: "./src/index.js",
		output: [
			{
				file: "index.cjs.min.js",
				format: "cjs"
			},
			{
				file: "index.es.min.js",
				format: "es",
				exports: "named"
			}
		],
		plugins: [
			postcss({
				plugins: [],
				minimize: true
			}),
			babel({
				exclude: "node_modules/**",
				presets: ["@babel/preset-react"]
			}),
			external(),
			resolve(),
			terser()
		]
	}
]
