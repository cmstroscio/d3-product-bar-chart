var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browsersync', function() {
    browserSync.init({
        server: {
            baseDir: "./",
            port: 3000
        }
    });

    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./*.js").on('change', browserSync.reload);
    gulp.watch("./*.csv").on('change', browserSync.reload);
});