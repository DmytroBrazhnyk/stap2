const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');
const ghPages = require('gulp-gh-pages')

exports.libs_style = tasks.libs_style;
exports.svg_css = tasks.svg_css;
exports.fonts = tasks.fonts;
exports.style = tasks.style;
exports.dist_js = tasks.dist_js;
exports.libs_js = tasks.libs_js;
exports.dev_js = tasks.dev_js;
exports.html = tasks.html;
exports.php = tasks.php;
exports.rastr = tasks.rastr;
exports.webp = tasks.webp;
exports.svg_sprite = tasks.svg_sprite;
exports.ttf = tasks.ttf;
exports.ttf2 = tasks.ttf2;
exports.bs_html = tasks.bs_html;
exports.bs_php = tasks.bs_php;
exports.watch = tasks.watch;
exports.deploy = tasks.deploy;

exports.default = gulp.parallel(
  exports.libs_style,
  exports.svg_css,
  exports.ttf,
  exports.ttf2,
  exports.fonts,
  exports.style,
  exports.libs_js,
  exports.dev_js,
  exports.rastr,
  exports.webp,
  exports.svg_sprite,
  exports.html,
  exports.bs_html,
  exports.watch
)

gulp.task('deploy', function(){
  return gulp.src('./dist/**/*')
  .pipe(ghPages({
    remoteUrl: "https://github.com/Sellfkilled/stepproj2",
    branch: "gh-pages",
  }))
})