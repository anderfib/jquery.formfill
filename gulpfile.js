var gulp = require("gulp");
var uglify = require("gulp-uglify");
var connect = require('gulp-connect');
var rename = require("gulp-rename");
var fileinclude = require("gulp-file-include");

gulp.task("app", (cb) => {
    gulp
        .src(["src/*.html"])
        .pipe(
            fileinclude({
                prefix: "@@",
                basepath: "@file",
            })
        )
        .pipe(gulp.dest("dist"));
    cb();
});

gulp.task("js", function () {
    return (
        gulp
            .src("src/*.js")
            // .pipe(rename({ suffix: '.min' }))
            .pipe(uglify())
            .pipe(gulp.dest("dist"))
    );
});


gulp.task('watch', function () {
    gulp.watch('src/*.js', gulp.series('js'));
    gulp.watch("src/*.html", gulp.series('app'));
});

gulp.task('server', function () {
    connect.server({
        port: 8090,
        livereload: true,
        root: 'src'
    })
});

gulp.task("default", gulp.parallel('server', 'watch'));

