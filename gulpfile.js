const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore");
const del = require("del");
var replace = require("gulp-replace");

// Styles

const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(replace('../../img', '../img'))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("./build/css"))
    .pipe(sync.stream());
};

exports.styles = styles;

// Images

const svgo = () => {
  return gulp.src("source/img/**/*.{svg}")
    .pipe(imagemin([
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("./build/img"));
};

exports.svgo = svgo;

const webpImg = () => {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp())
    .pipe(gulp.dest("./build/img"));
};

exports.webpImg = webpImg;

// Sprites

const spriteIcons = () => {
  return gulp.src("source/img/**/*.svg")
    .pipe(svgstore())
    .pipe(rename("spriteIcons.svg"))
    .pipe(gulp.dest("./build/img"));
};

exports.spriteIcons = spriteIcons;

// Copy

const copy = () => {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**.{webp,jpg,png}",
    "source/js/**"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
};

exports.copy = copy;

// HTML

const html = () => {
  return gulp.src("source/*.html")
    .pipe(gulp.dest("./build"))
    .pipe(sync.stream());
};

exports.html = html;

// Clean

const clean = () => {
  return del("build");
};

exports.clean = clean;

// Build

const build = gulp.series(clean, copy, styles, svgo, webpImg, spriteIcons, html);

exports.build = build;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: './build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series(styles));
  gulp.watch("source/*.html", gulp.series(html));
}

exports.default = gulp.series(
  build, server, watcher
);
