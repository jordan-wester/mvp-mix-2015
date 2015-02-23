module.exports = function (grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 8090
        }
      }
    },

    watch: {
      css: {
        files: ['stylesheets/**/*.scss'],
        tasks: ['sass']
      },
      admin: {
        files: ['app/admin/**/*.js'],
        tasks: ['concat:admin', 'ngAnnotate:admin', 'uglify:admin']
      },
      shared: {
        files: ['app/shared/**/*.js'],
        tasks: ['concat:shared', 'ngAnnotate:shared', 'uglify:shared']
      }
    },

    clean: [
      'dist/*'
    ],

    concat: {
      options: {
        sourceMap: false
      },
      admin: {
        src: ['app/admin/adminModule.js', 'app/admin/**/*.js'],
        dest: 'dist/admin.js'
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
      admin: {
        src: ['dist/admin.js']
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
      admin: {
        files: {
          'dist/admin.min.js': ['dist/admin.js']
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
    }
  });

  grunt.registerTask('default', ['connect', 'watch']);
  grunt.registerTask('runtests', ['jshint', 'concat', 'karma:unit']);
  grunt.registerTask('compile', ['clean', 'concat']);
  grunt.registerTask('release', ['compile', 'ngAnnotate', 'uglify']);

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ng-annotate');
};
