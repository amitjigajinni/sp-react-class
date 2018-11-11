let gulp = require( 'gulp' ),
  markdown = require( 'gulp-markdown' ),
  concat = require( 'gulp-concat' ),
  wrap = require( 'gulp-wrap' ),
  del = require( 'del' ),
  opn = require( 'opn' ),
  fs = require( 'fs' ),
  minimist = require( 'minimist' );

let exercises = 'exercises/',
  begin = '/begin/',
  solution = '/solution/',
  src = 'src/',
  publicFolder = 'public/',
  instructions = '-instructions.md',
  instructionsOut = 'instructions.html',
  images = 'images/',
  imageFiles = '**/*.+(png|jpg|gif)',
  files = '**/*.+(js|html)',
  notData = '!' + src + 'data/**/*',
  allFiles = '**/*';

let options = minimist( process.argv.slice( 2 ) );

// TODO: Write a backup-files target/task

gulp.task( 'start-exercise', [ 'clean-all' ], function() {
  if ( options.src ) {
    const baseDir = exercises + options.src + begin;
    gulp.src( baseDir + src + files )
      .pipe( gulp.dest( src ) );
    gulp.src( baseDir + publicFolder + files )
      .pipe( gulp.dest( publicFolder ) );

    gulp.src( baseDir + images + imageFiles )
      .pipe( gulp.dest( publicFolder + images ) );

    console.log( 'Testing ' + baseDir + options.src + instructions );
    if ( fs.existsSync( baseDir + options.src + instructions ) ) {
      console.log( 'Building instructions....' );
      gulp.src( baseDir + options.src + instructions )
        .pipe( markdown() )
        .pipe( wrap( { src: exercises + 'instructions-template.html' } ) )
        .pipe( concat( instructionsOut ) )
        .pipe( gulp.dest( publicFolder ) );

      gulp.src( exercises + 'instructions.css' )
        .pipe( gulp.dest( publicFolder ) );

      opn( 'http://localhost:3000/' + instructionsOut );

      // opn seems to hang up gulp, this exits after a (relatively safe?) 2 seconds
      setTimeout( () => {
        process.exit( 0 );
      }, 2000 );
    } else {
      console.warn('Could not find ' + baseDir + options.src + instructions );
    }

  }
} );

gulp.task( 'show-solution', [ 'clean-all' ], function() {
  if ( options.src ) {
    gulp.src( exercises + options.src + solution + src + files )
      .pipe( gulp.dest( src ) );
    gulp.src( exercises + options.src + solution + publicFolder + files )
      .pipe( gulp.dest( publicFolder ) );
  }
} );

gulp.task( 'copy-to-begin', [ 'clean-begin' ], () => {
  if ( options.dest ) {
    gulp.src( [ src + files, notData ] )
      .pipe( gulp.dest( exercises + options.dest + begin + src ) );
    gulp.src( publicFolder + files )
      .pipe( gulp.dest( exercises + options.dest + begin + publicFolder ) );
  }
} );

gulp.task( 'copy-to-solution', [ 'clean-solution' ], () => {
  if ( options.dest ) {
    // TODO: Make sure that the data folder is not included
    gulp.src( [ src + files, notData ] )
      .pipe( gulp.dest( exercises + options.dest + solution + src ) );
    gulp.src( publicFolder + files )
      .pipe( gulp.dest( exercises + options.dest + solution + publicFolder ) );
  }
} );

gulp.task( 'clean-solution', () => {
  return del( [ exercises + options.dest + solution + src,
    exercises + options.dest + solution + publicFolder ] );
} );

gulp.task( 'clean-begin', () => {
  return del( [ exercises + options.dest + begin + src,
    exercises + options.dest + begin + publicFolder ] );
} );

gulp.task( 'clean-src', () => {
  return del( [ src + files, notData ] );
} );

gulp.task( 'clean-public', () => {
  return del( publicFolder + files, { ignore: 'favicon.ico' } );
} );

gulp.task( 'clean-all', [ 'clean-src', 'clean-public' ] );

gulp.task( 'swap', function() {
  if ( options.src && options.dest && options.ex ) {
    let base = `${exercises}${options.ex}/`;
    gulp.src( base + options.src + '/**/*', { base: base + options.src } )
      .pipe( gulp.dest( base + options.dest ) );
  }
} );
