// プラグインの読み込み
const gulp = require('gulp'); // gulp本体読み込み
const ejs = require('gulp-ejs');
const replace = require('gulp-replace');
const data = require('gulp-data');
const sass = require('gulp-sass')(require('sass')); //sass
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber'); // エラー時のタスクの強制終了を防ぐ
const notify = require('gulp-notify'); // エラー時のアラートを出力
const uglify = require('gulp-uglify');
const rename = require('gulp-rename'); // ファイル出力時にファイル名を変える
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
// const webp = require('gulp-webp');
const changed = require('gulp-changed');
const del = require('del');
const browserSync = require('browser-sync'); // 変更を即座にブラウザへ反映(ブラウザリロード)
// 入出力するフォルダを指定しやすいように変数を定義
const srcBase = 'src';
const destBase = 'dest';
const srcPath = {
  'ejs': [srcBase + '/**/*.ejs', '!' + srcBase + '/**/_*.ejs'],
  'allEjs': srcBase + '/**/*.ejs',
  'scss': srcBase + '/assets/scss/**/*.scss',
  'js': srcBase + '/assets/js/**/*.js',
  'json': srcBase + '/assets/json/**',
  'img': srcBase + '/assets/img/**',
  'lib': srcBase + '/assets/lib/**',
  'htaccess': srcBase + '/**/.htaccess',
  'allFiles': srcBase + '/**/*'
};
const destPath = {
  'ejs': destBase + '/',
  'css': destBase + '/assets/css/',
  'js': destBase + '/assets/js/',
  'json': destBase + '/assets/json/',
  'img': destBase + '/assets/img/',
  'lib': destBase + '/assets/lib/',
  'htaccess': destBase + '/',
  'allFiles': destBase + '/**/*'
};
// Ejs出力設定(EJSからHTMLを自動で生成する)
function compileEjs() {
  return gulp.src(srcPath.ejs)
  .pipe(plumber({ errorHandler: notify.onError('Error:<%= error.message %>') }))
  .pipe(data(function(file) {
    const ejsDir = (srcBase).replace('./', '') + '/';
    const filepathReplace = file.path.replace(/\\/g,'/')
    const absolute = '/' + filepathReplace.split(ejsDir)[filepathReplace.split(ejsDir).length - 1].replace('.ejs', '.html').replace(/index\.html$/, '');
    const relative = '../'.repeat([absolute.split('/').length - 2]);
    return { relative, absolute };
  }))
  .pipe(ejs({}, { rmWhitespace: true }, { ext: '.html' }))
  .pipe(rename({ extname: '.html' }))
  .pipe(replace(/^[ \t]*\n/gmi, ''))
  .pipe(gulp.dest(destPath.ejs))
  .pipe(browserSync.stream());
}
// Sass出力設定(scssを自動で生成する)
function compileSass() {
  return gulp.src(srcPath.scss)
  .pipe(plumber({ errorHandler: notify.onError('Error:<%= error.message %>') }))
  .pipe(sass({ outputStyle: 'compressed' }))
  .pipe(autoprefixer(['> 1%', 'last 2 versions']))
  .pipe(gulp.dest(destPath.css))
  .pipe(browserSync.stream());
}
// JavaScript出力設定
function minJs() {
  return gulp.src(srcPath.js)
  .pipe(uglify())
  // .pipe(rename({ extname: '.min.js' })) // .min.jsにリネーム（必要であれば）
  .pipe(gulp.dest(destPath.js))
  .pipe(browserSync.stream());
}
function minJson() {
  return gulp.src(srcPath.json)
  .pipe(gulp.dest(destPath.json));
}
// 画像出力設定
function compileImagem() {
  return gulp.src(srcPath.img)
  .pipe(plumber({ errorHandler: notify.onError('Error:<%= error.message %>') }))
  .pipe(changed(destPath.img))
  .pipe(
    imagemin([
      pngquant({ quality: [.60, .70], speed: 1 }), // png
      mozjpeg({ quality: 80 }), // jpg
      imagemin.gifsicle({ optimizationLevel: 3 }), // gif
      imagemin.svgo() // svg
    ])
  )
  // .pipe(webp({ quality: 65, method: 6 })) // webp変換（必要であれば）
  .pipe(gulp.dest(destPath.img));
}
// lib出力設定
function lib() {
  return gulp.src(srcPath.lib)
  .pipe(gulp.dest(destPath.lib));
}
// htaccess出力設定
function htaccess() {
  return gulp.src(srcPath.htaccess)
  .pipe(gulp.dest(destPath.htaccess));
}
// destフォルダの削除(生成前に、一度生成した中身を削除する)
function clean() {
  return del(destBase);
};
// ローカルサーバー立ち上げ
const browserSyncOption = {
  server: destBase
}
function browserSyncFunc() {
  browserSync.init(browserSyncOption);
}
// リロード
function browserSyncReload(done) {
  browserSync.reload();
  done();
}
// 監視ファイル設定(ファイルの変更時にbrowserSyncReloadする)
function watchFiles(done) {
  gulp.watch(srcPath.scss, gulp.series(compileSass));
  gulp.watch(srcPath.js, gulp.series(minJs));
  gulp.watch(srcPath.img, gulp.series(compileImagem));
  gulp.watch(srcPath.lib, gulp.series(lib, browserSyncReload));
  gulp.watch(srcPath.allEjs, gulp.series(compileEjs, browserSyncReload));
  done();
}
// タスク実行設定(css、EJS、img、jsを出力する)
exports.default = gulp.series(
  clean,
  gulp.parallel(htaccess, lib, compileEjs, compileSass, minJs, minJson, compileImagem),
  gulp.parallel(watchFiles, browserSyncFunc)
);
exports.release = gulp.series(
  clean,
  gulp.parallel(htaccess, lib, compileEjs, compileSass, minJs, minJson, compileImagem)
);