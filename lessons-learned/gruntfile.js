module.exports = function (grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 8090,
          open: true
        }
      }
    },

    clean: [
      'dist/*'
    ],

    concat: {
      options: {
        sourceMap: false
      },
      user: {
        src: ['app/user/userModule.js', 'app/user/**/*.js'],
        dest: 'dist/user.js'
      },
      product: {
        src: ['app/product/productModule.js', 'app/product/**/*.js'],
        dest: 'dist/product.js'
      },
      shared: {
        src: [
          'app/shared/sharedModule.js',
          'app/shared/**/*.js',
          'app/main.js'
        ],
        dest: 'dist/shared.js'
      },
      libs: {
        src: [
          'libs/angular/angular.js',
          'libs/angular-ui-router/release/angular-ui-router.js',
          'libs/angular-resource/angular-resource.js'
        ],
        dest: 'dist/libs.js'
      }
    },

    ngAnnotate: {
      options: {
        add: true,
        remove: false,
        singleQuotes: true
      },
      user: {
        src: ['dist/user.js']
      },
      product: {
        src: ['dist/product.js']
      },
      shared: {
        src: ['dist/shared.js']
      }
    },

    uglify: {
      options: {
        mangle: true,
        sourceMap: true
      },
      user: {
        files: {
          'dist/user.min.js': ['dist/user.js']
        }
      },
      product: {
        files: {
          'dist/product.min.js': ['dist/product.js']
        }
      },
      shared: {
        files: {
          'dist/shared.min.js': ['dist/shared.js']
        }
      },
      libs: {
        files: {
          'dist/libs.min.js': ['dist/libs.js']
        }
      }
    },

    watch: {
      config: {
        files: ['gruntfile.js'],
        tasks: ['release']
      },
      css: {
        files: ['stylesheets/**/*.scss'],
        tasks: ['sass']
      },
      user: {
        files: ['app/user/**/*.js'],
        tasks: ['concat:user', 'ngAnnotate:user', 'uglify:user']
      },
      product: {
        files: ['app/product/**/*.js'],
        tasks: ['concat:product', 'ngAnnotate:product', 'uglify:product']
      },
      shared: {
        files: ['app/shared/**/*.js'],
        tasks: ['concat:shared', 'ngAnnotate:shared', 'uglify:shared']
      }
    },
  });

  grunt.registerTask('runtests', ['jshint', 'concat', 'karma:unit']);
  grunt.registerTask('compile', ['clean', 'concat']);
  grunt.registerTask('release', ['compile', 'ngAnnotate', 'uglify']);
  grunt.registerTask('default', ['connect', 'watch']);

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ng-annotate');
};
