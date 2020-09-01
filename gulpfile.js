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

// Styles

const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
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

const spriteFlags = () => {
  return gulp.src("source/img/**/flag-*.svg")
    .pipe(svgstore())
    .pipe(rename("spriteFlags.svg"))
    .pipe(gulp.dest("./build/img"));
};

exports.spriteFlags = spriteFlags;

const spriteTransport = () => {
  return gulp.src("source/img/**/transport-*.svg")
    .pipe(svgstore())
    .pipe(rename("spriteTransport.svg"))
    .pipe(gulp.dest("./build/img"));
};

exports.spriteTransport = spriteTransport;

const spriteSocial = () => {
  return gulp.src("source/img/**/social-*.svg")
    .pipe(svgstore())
    .pipe(rename("spriteSocial.svg"))
    .pipe(gulp.dest("./build/img"));
};

exports.spriteSocial = spriteSocial;

const spriteLike = () => {
  return gulp.src("source/img/**/like-*.svg")
    .pipe(svgstore())
    .pipe(rename("spriteLike.svg"))
    .pipe(gulp.dest("./build/img"));
};

exports.spriteLike = spriteLike;

const spriteTopMenu = () => {
  return gulp.src("source/img/**/topmenu-*.svg")
    .pipe(svgstore())
    .pipe(rename("spriteTopMenu.svg"))
    .pipe(gulp.dest("./build/img"));
};

exports.spriteTopMenu = spriteTopMenu;

const spriteContacts = () => {
  return gulp.src("source/img/**/contacts-*.svg")
    .pipe(svgstore())
    .pipe(rename("spriteContacts.svg"))
    .pipe(gulp.dest("./build/img"));
};

exports.spriteContacts = spriteContacts;

const spriteTriangleArrows = () => {
  return gulp.src("source/img/**/triangle-*.svg")
    .pipe(svgstore())
    .pipe(rename("spriteTriangleArrows.svg"))
    .pipe(gulp.dest("./build/img"));
};

exports.spriteTriangleArrows = spriteTriangleArrows;

const spriteUser = () => {
  return gulp.src("source/img/**/user.svg")
    .pipe(svgstore())
    .pipe(rename("spriteUser.svg"))
    .pipe(gulp.dest("./build/img"));
};

exports.spriteUser = spriteUser;

const spriteReturn = () => {
  return gulp.src("source/img/**/return.svg")
    .pipe(svgstore())
    .pipe(rename("spriteReturn.svg"))
    .pipe(gulp.dest("./build/img"));
};

exports.spriteReturn = spriteReturn;

const spriteFilterCountries = () => {
  return gulp.src("source/img/**/filter*.svg")
    .pipe(svgstore())
    .pipe(rename("spriteFilterCountries.svg"))
    .pipe(gulp.dest("./build/img"));
};

exports.spriteFilterCountries = spriteFilterCountries;

const spriteCopyright = () => {
  return gulp.src("source/img/**/htmlacademy.svg")
    .pipe(svgstore())
    .pipe(rename("spriteCopyright.svg"))
    .pipe(gulp.dest("./build/img"));
};

exports.spriteCopyright = spriteCopyright;

const spriteDots = () => {
  return gulp.src("source/img/**/dots.svg")
    .pipe(svgstore())
    .pipe(rename("spriteDots.svg"))
    .pipe(gulp.dest("./build/img"));
};

exports.spriteDots = spriteDots;

const spriteShowMore = () => {
  return gulp.src("source/img/**/show-more-plus.svg")
    .pipe(svgstore())
    .pipe(rename("spriteShowMore.svg"))
    .pipe(gulp.dest("./build/img"));
};

exports.spriteShowMore = spriteShowMore;

const spriteTick = () => {
  return gulp.src("source/img/**/tick.svg")
    .pipe(svgstore())
    .pipe(rename("spriteTick.svg"))
    .pipe(gulp.dest("./build/img"));
};

exports.spriteTick = spriteTick;

const spriteMonthArrow = () => {
  return gulp.src("source/img/**/month-*.svg")
    .pipe(svgstore())
    .pipe(rename("spriteMonthArrow.svg"))
    .pipe(gulp.dest("./build/img"));
};

exports.spriteMonthArrow = spriteMonthArrow;

const spriteSmallArrowCross = () => {
  return gulp.src("source/img/**/small-*.svg")
    .pipe(svgstore())
    .pipe(rename("spriteSmallArrowCross.svg"))
    .pipe(gulp.dest("./build/img"));
};

exports.spriteSmallArrowCross = spriteSmallArrowCross;

const spriteDropDown = () => {
  return gulp.src("source/img/**/dropdown-*.svg")
    .pipe(svgstore())
    .pipe(rename("spriteDropDown.svg"))
    .pipe(gulp.dest("./build/img"));
};

exports.spriteDropDown = spriteDropDown;

// Copy

const copy = () => {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
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

const build = gulp.series(clean, copy, styles, svgo, webpImg, spriteFlags,
  spriteTransport, spriteSocial, spriteLike, spriteTopMenu, spriteContacts, spriteUser,
  spriteCopyright, spriteReturn, spriteFilterCountries, spriteDots, spriteTick, spriteMonthArrow,
  spriteSmallArrowCross, spriteDropDown, html);

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
