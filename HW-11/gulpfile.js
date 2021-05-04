
const gulp = require('gulp');
const pug_html = require('gulp-pug');

function pug(cb) {
    return gulp.src('./src/pug/*.pug')
        .pipe(pug_html({
            pretty: true
        }))
        .pipe(gulp.dest('./src/pug/'))
}

let project_folder = 'result';
let source_folder = 'src';
let fs = require('fs');

let path = {
    build: { //путь к готовому проекту
        html: project_folder + '/',
        css: project_folder + '/css/',
        fonts: project_folder + '/fonts/',
        js: project_folder + '/js/',
        img: project_folder + '/img/',
    },
    src: { //путь к разработке
        html: [source_folder + '/pug/*.html', '!' + source_folder + '/pug/_*.html'],
        _pug: source_folder + '/pug/*.pug',
        css: [source_folder + '/scss/*.scss', '!' + source_folder + '/pug/_*.scss'],
        fonts: source_folder + '/fonts/*.ttf',
        js: source_folder + '/js/script.js',
        img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}'
    },
    watch: { //путь к прослушиваемым файлам
        html: source_folder + '/pug/*.html',
        _pug: source_folder + '/pug/index.pug',
        css: source_folder + '/scss/*.scss',
        fonts: source_folder + '/fonts/*.ttf',
        js: source_folder + '/js/script.js',
        img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}'
    },
    clean: { //путь перезаписывающих файлов
        result: './' + project_folder + '/',
        html: source_folder + '/pug/*.html'
    }
}

let {src, dest} = require('gulp'),
    browsersync = require('browser-sync').create(),
    fileinclude = require('gulp-file-include'),
    del = require('del'),
    scss = require('gulp-sass'),
    group_media = require('gulp-group-css-media-queries'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    ttf2woff = require('gulp-ttf2woff'),
    ttf2woff2 = require('gulp-ttf2woff2'),
    fonter = require('gulp-fonter');

function browserSync(params) {
    browsersync.init({
        server: {
            baseDir: './' + project_folder + '/'
        },
        port: 3000,
        notify: false
    })
}

function fonts(parap) {
    src(path.src.fonts)
    .pipe(ttf2woff())
    .pipe(dest(path.build.fonts))
    .pipe(ttf2woff2())
    .pipe(dest(path.build.fonts))
    return src(path.src.fonts)
}

function images() {
    return src(path.src.img)
    .pipe(
        imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false}],
            interlaced: true,
            optimizationLevel: 3 // 0 to 7
        })
    )
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream())
}
gulp.task('otf2ttf', function() {
    return src([source_folder + '/fonts/*.otf'])
    .pipe(fonter({
        formats: ['ttf']
    }))
    .pipe(dest(source_folder + '/fonts/'));
})


function html() {
    return src(path.src.html)
    .pipe(fileinclude())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}

function css() {
    return src(path.src.css)
    .pipe(
        scss({
            outputStyle: 'expended'
        })
    )
    .pipe(
        group_media()
    )
    .pipe(
        autoprefixer({
            ovverrideBrowserslist: ['last 5 verdion'],
            cascade: true
        })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())
}

function fontsStyle(params) {
    let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
    if (file_content == '') {
        fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
        return fs.readdir(path.build.fonts, function (err, items) {
            if (items) {
                let c_fontname;
                for (var i = 0; i < items.length; i++) {
                    let fontname = items[i].split('.');
                    fontname = fontname[0];
                    if (c_fontname != fontname) {
                        fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
                    }
                    c_fontname = fontname;
                }
            }
        })
    }
}

function cb() {

}

function watchFiles(params) {
    gulp.watch([path.watch._pug], pug);
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.img], images);
}

function clean(params) {
    return del(path.clean.result);
}

let build = gulp.series(clean, gulp.parallel(css,html,images, fonts), fontsStyle);
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.fontsStyle = fontsStyle;
exports.fonts = fonts;
exports.images = images;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
exports.start = pug;

// const gulp = require('gulp')
// const pug_html = require('gulp-pug')

// function pug_(cb) {
//     return gulp.src('./src/pug/*.pug')
//         .pipe(pug_html({
//             pretty: true
//         }))
//         .pipe(gulp.dest('./src/pug/'))
// }