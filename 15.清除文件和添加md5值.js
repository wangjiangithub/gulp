var gulp = require('gulp'),
	clean = require('gulp-clean'),
	rev = require('gulp-rev');
    // concat = require('gulp-concat'),
    // revReplace = require('gulp-rev-replace'),
    // useref = require('gulp-useref'),
    // revReplace = require('gulp-rev-replace'),
    // revCollector = require('gulp-rev-collector'),
    // zip = require('gulp-zip'),
    // chalk = require('chalk');


gulp.task('clean', function() {
    return gulp.src(['dist/','rev/'], { read: false }).pipe(clean());
});

gulp.task('md5', function() {
    return gulp.src(['app/**/**'])
        .pipe(rev())
        .pipe(gulp.dest('dist/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev/'))
});

gulp.task('build', ['clean','md5'], function() {
    console.log("the job has finished")
});