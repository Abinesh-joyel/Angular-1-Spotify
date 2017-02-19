var gulp = require("gulp");
var browserSync = require("browser-sync").create();

gulp.task("serve",function(){
	browserSync.init({
		server:{
			baseDir:"./"
		}
	});
	gulp.watch("./index.html").on("change",browserSync.reload);
	gulp.watch('src/*.js',browserSync.reload);
	gulp.watch('src/styles/*.css',browserSync.reload);
	gulp.watch('src/app/controller/*.js',browserSync.reload);
	gulp.watch('src/app/templates/*.html',browserSync.reload);
})
