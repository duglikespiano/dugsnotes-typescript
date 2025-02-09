const gulp = require('gulp');
const gulpTypescript = require('gulp-typescript');

gulp.task('default', function () {
	return gulp
		.src('*/**/*.ts')
		.pipe(
			gulpTypescript({
				noImplicitAny: true,
			})
		)
		.pipe(
			gulp.dest(function (file) {
				console.log(file.base);
				return file.base;
			})
		);
});
