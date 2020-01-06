const { src, dest, task } = require("gulp");
const minifyInline = require("gulp-minify-inline");

task("minify", function() {
  return src("index.html")
    .pipe(minifyInline())
    .pipe(dest(".."));
});
