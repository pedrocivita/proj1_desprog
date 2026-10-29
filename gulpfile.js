import del from 'del';
import gulp from 'gulp';
import cache from 'gulp-cached';
import BrowserSync from 'browser-sync';

import orfalius from './orfalius.js';

const browserSync = BrowserSync.create();


const TEMPLATE = 'resources/template.html';
const SOURCE = 'src/**/*.md';
const SNIPPETS = 'src/**/*.mds';
const IMAGES = 'src/**/img/**/*';
const STATIC = ['src/**/*', '!src/**/vid/**/*', `!${SOURCE}`, `!${SNIPPETS}`];
const ASSETS = ['resources/**/css/*', 'resources/**/fonts/*', 'resources/**/icons/*', 'resources/**/js/*'];


// `npm run dev` builds into site/ (gitignored) and watches for changes.
// `npm run build` builds the published copy into docs/ (served by GitHub Pages).
let DEST = 'site';


function clean() {
    return del([`${DEST}/*`, `!${DEST}/.nojekyll`]);
}


function compile() {
    return gulp.src(SOURCE)
        .pipe(cache('compile'))
        .pipe(orfalius(TEMPLATE))
        .pipe(gulp.dest(DEST));
}

function copyStatic() {
    return gulp.src(STATIC)
        .pipe(cache('copy'))
        .pipe(gulp.dest(DEST));
}

function copyAssets() {
    return gulp.src(ASSETS)
        .pipe(cache('copy'))
        .pipe(gulp.dest(DEST));
}

function useDocs(done) {
    DEST = 'docs';
    done();
}


function watch() {
    gulp.watch([TEMPLATE, SOURCE, SNIPPETS, IMAGES], compile).on('change', browserSync.reload);
    gulp.watch(STATIC, copyStatic).on('change', browserSync.reload);
    gulp.watch(ASSETS, copyAssets).on('change', browserSync.reload);
}

gulp.task('clean', clean);

gulp.task('build', gulp.series(
    useDocs,
    clean,
    gulp.parallel(
        compile,
        copyStatic,
        copyAssets)
));

gulp.task('default', gulp.series(
    gulp.parallel(
        compile,
        copyStatic,
        copyAssets),
    watch
));
