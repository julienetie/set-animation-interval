import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
	moduleName: 'setAnimationFrame',
	entry: 'set-animation-frame.es.js',
	format: 'umd',
	plugins: [babel({
			exclude: 'node_modules/**'
		}),
		nodeResolve({ jsnext: true })
	],
	targets: [{
		format: 'umd',
		dest: 'set-animation-frame.js'
	}]
};
