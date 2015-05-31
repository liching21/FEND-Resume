module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify:{
            my_target: {
              files: {
                // desc: src
                'js/build/jQuery.min.js': 'js/jQuery.js',
                'js/build/helper.min.js' : 'js/helper.js',
                'js/build/resumeBuilder.min.js' : 'js/resumeBuilder.js'
              }
            }
        },

        cssmin: {
          options: {
            shorthandCompacting: false,
            roundingPrecision: -1
          },
          target: {
            files: {
              'css/build/style.min.css': 'css/style.css'
            }
          }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['uglify','cssmin']);

};