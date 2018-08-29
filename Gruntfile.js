module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      cssmin: {        
        target: {
            files: [{
              expand: true,
              cwd: './dist',
              src: ['all.css'],
              dest: './dist',
              ext: '.min.css'
            }]
          }
      },
      concat_css: {       
        all: {
          src: ["./css/*.css"],
          dest: "./dist/all.css"
        },
      },
      concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: ['./js/*.js'],
          dest: './dist/built.js',
        },
      },
      uglify: {
        my_target: {
            files: {
              'dist/built.min.js': ['./dist/built.js']
            }
        }
      }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-concat-css');

    grunt.loadNpmTasks('grunt-contrib-cssmin');
   
    // Default task(s).
    grunt.registerTask('minify', ['concat_css', 'cssmin','concat','uglify']);
  
  };