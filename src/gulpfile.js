const { src, dest, task } = require("gulp");
const minifyInline = require("gulp-minify-inline");
const htmlmin = require("gulp-htmlmin");

task("minify", function () {
  return src("index.html")
    .pipe(minifyInline())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(".."));
});
