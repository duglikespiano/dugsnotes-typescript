const { watch, src, dest, parallel } = require('gulp');
const gulpTypescript = require('gulp-typescript');

const compileTypescript = () => {
	return src(['**/*.ts', '!**/*.d.ts', '!**/test.ts'])
		.pipe(
			gulpTypescript({
				noImplicitAny: true,
			})
		)
		.pipe(
			dest(function (file) {
				return file.base;
			})
		);
};

watch(['**/*.ts', '!**/*.d.ts']).on('change', compileTypescript);

exports.default = parallel(compileTypescript);
