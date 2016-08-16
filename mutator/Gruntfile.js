'use strict';
module.exports = function(grunt) {
  // Load all tasks
  require('load-grunt-tasks')(grunt);
  // Show elapsed time
  require('time-grunt')(grunt);
  var jsFileList = [
    //'push.html'
  ];


  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '*.js'
      ]
    },
    watch: {
      js: {
        files: [
          jsFileList,//empty
          '<%= jshint.all %>'
        ],
        tasks: ['jshint']
      },
      livereload: {
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
          livereload: true
        },
        files: [
          '*.html',
          '*/*.html',
          '**/*.html'
        ]
      }
    }
  });

  // Register tasks
  grunt.registerTask('default', [
    'dev'
  ]);
  grunt.registerTask('dev', [
    'newer:jshint'
    //'newer:autoprefixer:dev',
  ]);
};
