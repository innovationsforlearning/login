var dest = "./www";
var src = './src';

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest
    }
  },
  sass: {
    src: src + '/sass/*.{sass,scss}',
    dest: dest + '/css',
    settings: {

      imagePath: 'images' // Used by the image-url helper
    }
  },
  images: {
    src: src + '/images/**',
    dest: dest + '/img'
  },
  markup: {
    src: src + "/html/**",
    dest: dest
  },
  // iconFonts: {
  //   name: 'Gulp Starter Icons',
  //   src: src + '/icons/*.svg',
  //   dest: dest + '/fonts',
  //   sassDest: src + '/scss',
  //   template: './gulp/tasks/iconFont/template.sass.swig',
  //   sassOutputName: '_icons.scss',
  //   fontPath: 'fonts',
  //   className: 'icon',
  //   options: {
  //     fontName: 'Post-Creator-Icons',
  //     appendCodepoints: true,
  //     normalize: false
  //   }
  // },
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/javascript/global.coffee',
      dest: dest + '/js',
      outputName: 'global.js',
      // Additional file extentions to make optional
      extensions: ['.coffee', '.hbs'],
      // list of modules to make require-able externally
      require: ['jquery', 'backbone/node_modules/underscore']
      // See https://github.com/greypants/gulp-starter/issues/87 for note about
      // why this is 'backbone/node_modules/underscore' and not 'underscore'
    }, {
      entries: src + '/javascript/page.js',
      dest: dest + '/js',
      outputName: 'page.js',
      // list of externally available modules to exclude from the bundle
      external: ['jquery', 'underscore']
    }]
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }
};
