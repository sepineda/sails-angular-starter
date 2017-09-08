/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app': 'app', // 'dist',
    '@angular': 'node_modules/@angular',
    'angular-in-memory-web-api': 'node_modules/angular-in-memory-web-api',
    'rxjs': 'node_modules/rxjs',
    'angular2-materialize': 'node_modules/angular2-materialize',
    'plugin-babel': 'plugin-babel.js',
    'systemjs-babel-build': 'systemjs-babel-browser.js',
    'materialize-css': 'node_modules/materialize-css'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': {
      main: 'main.js',
      defaultExtension: 'js',
      meta: {
        './*.js': {
          loader: 'systemjs-angular-loader.js'
        }
      }
    },
    'rxjs': {
      defaultExtension: 'js'
    },
    'angular-in-memory-web-api': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    'angular2-materialize': {
      main: 'dist/index',
      defaultExtension: 'js'
    },
    "materialize-css": {
      format: "global",
      main: "dist/js/materialize",
      defaultExtension: 'js'
    }
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'forms',
    'platform-browser',
    'platform-browser-dynamic',
    'router'
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/' + pkgName] = {
      main: 'index.js',
      defaultExtension: 'js'
    };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/' + pkgName] = {
      main: 'bundles/' + pkgName + '.umd.js',
      defaultExtension: 'js'
    };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages,
    transpiler: 'plugin-babel'
  };
  System.config(config);
})(this);
