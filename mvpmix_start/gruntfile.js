module.exports = function(grunt) {
  'use strict';

  var rewrite = require('connect-modrewrite');

  grunt.initConfig({
    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 8000,
          open: {
            target: 'http://localhost:8000/wordCloud'
          },
          middleware: function(connect, options, middlewares) {
            var rules = ['^[^\.]+$ /index.html'];
            middlewares.unshift(rewrite(rules));
            return middlewares;
          }
        }
      }
    },
    watch: {
      source: {
        files: [
          '**/**',
          '!dist/**',
          '!libs/**',
          '!node_modules/**'
        ],
        tasks: ['code-quality', 'scripts']
      }
    },
    bower: {
      dev: {
        dest: 'libs/'
      }
    },
    clean: {
      build: {
        src: 'dist'
      }
    },
    concat: {
      options: {
        sourceMap: true
      },
      app: {
        src: [
          'wordCloud/wordCloudModule.js', 'wordCloud/**/*.js',
          'shared/sharedModule.js', 'shared/**/*.js'
        ],
        dest: 'dist/app.js'
      },
      libs: {
        src: [
          'libs/jquery/dist/jquery.min.js',
          'libs/jqcloud2/dist/jqcloud.min.js',
          'libs/angular/angular.min.js',
          'libs/angular-ui-router/release/angular-ui-router.min.js',
          'libs/angular-resource/angular-resource.min.js',
          'libs/angular-jqcloud/angular-jqcloud.js',
          'libs/lodash/lodash.min.js'
        ],
        dest: 'dist/libs.js'
      }
    },
    ngAnnotate: {
      options: {
        singleQuotes: true
      },
      libs: {
        expand: true,
        src: 'dist/app.js'
      }
    },
    uglify: {
      package: {
        options: {
          compress: true,
          mangle: false,
          sourceMap: true,
          sourceMapIn: 'dist/app.js.map',
          sourceMapRoot: '../'
        },
        expand: true,
        src: 'dist/app.js'
      }
    },
    jsbeautifier: {
      src: ['**/*.js', '!dist/**', '!libs/**', '!node_modules/**'],
      options: {
        config: '.jsbeautifier'
      }
    },
    jshint: {
      src: ['**/*.js', '!dist/**', '!libs/**', '!node_modules/**'],
      options: {
        jshintrc: '.jshintrc'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-bower');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-jsbeautifier');

  // Smaller grunt tasks that organize work into logical groups
  // These tasks are typically composed together into workflows
  grunt.registerTask('update', ['bower']);
  grunt.registerTask('code-quality', ['jsbeautifier', 'jshint']);
  grunt.registerTask('scripts', ['clean', 'concat', 'ngAnnotate']);
  grunt.registerTask('debug', ['connect', 'watch']);
  grunt.registerTask('package', ['uglify']);

  // Larger grunt tasks that create workflows from smaller units of work
  // These are the tasks typically executed by developers
  grunt.registerTask('build', ['update', 'code-quality', 'scripts']);
  grunt.registerTask('dev', ['build', 'debug']);
  grunt.registerTask('release', ['build', 'package']);
  grunt.registerTask('default', ['dev']);
};
