var path = require('path');
var fs   = require('fs');

var gulpath = require('./config/gulp.cf.json');

var gulp     = require('gulp');
var sass     = require('gulp-sass');
var css      = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');

var clean  = require('gulp-clean');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require("gulp-rename");

var cache  = require('gulp-cache');
var notify = require('gulp-notify');

var merge = require('merge-stream');

//清理编译后的目录
gulp.task("clean",function(){
		return gulp.src(gulpath.clean)
		.pipe(clean())												
		.pipe(notify({message:'build,deploy目录清理完毕'}));			
});

//编译sass
gulp.task('style',function(){
		return gulp.src(gulpath.style.src)
		.pipe(sass({style:'expanded'}))						
		.pipe(concat('c11f5.css'))						
		.pipe(gulp.dest(gulpath.style.build))				
		.pipe(notify({message:'编译sass到build目录完毕'}))	
		//.pipe(css())										
		//.pipe(rename({suffix:'.min'}))						
		//.pipe(gulp.dest(gulpath.gulp.build))				
		//.pipe(notify({message:'css压缩到build完毕'}));		
});

//javascirpt
gulp.task('scripts',function(){
		return gulp.src(gulpath.scripts.src)
		.pipe(jshint())														
		.pipe(concat('c11f5.js'))											
		.pipe(gulp.dest(gulpath.scripts.build))								
		.pipe(notify({message:'javascript检查合并到bulid目录完毕'}))		
		//.pipe(uglify())														
		//.pipe(rename({suffix:'.min'}))										
		//.pipe(gulp.dest(gulpath.gulp.scripts.build))								
		//.pipe(notify({message:'javascript压缩命名到build完毕'}));			
});
//压缩图片
gulp.task('images',function(){
	return gulp.src(gulpath.images.src)
		.pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))		
		.pipe(gulp.dest(gulpath.images.build))														
		.pipe(notify({message:'图片压缩到build目录完毕'}))																	
});

//watch任务
gulp.task('watch',function(){
	gulp.watch(gulpath.style.src, ['style']);
	gulp.watch(gulpath.scripts.src, ['scripts']);
	gulp.watch(gulpath.images.src, ['images']);
});

gulp.task('default',['clean'],function(){
	gulp.start('style','scripts','images','watch');
});
