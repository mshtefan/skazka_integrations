module.exports = function (grunt) {

  //SPANEL BUILDER.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [
          //lib section
          'js/src/angular-mask.js',
          'js/src/sp.lead.mno.data.js',
          'js/src/sp.lead.mno.js'
        ],
        dest: 'js/dist/sailplay.leads.roche.js'
      },
      conc: {
        src: [
          'js/src/angular.js',
          'js/dist/sailplay.leads.roche.min.js'
        ],
        dest: 'js/dist/sailplay.leads.roche.min.js'
      }
    },
    ngAnnotate: {
      annotate: {
        files: {
          'js/dist/sailplay.leads.roche.js': ['js/dist/sailplay.leads.roche.js']
        }
      }
    },
    uglify: {
      min: {
        src: ['js/dist/sailplay.leads.roche.js'],
        dest: 'js/dist/sailplay.leads.roche.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.loadNpmTasks('grunt-ng-annotate');

  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Build spanel v4
  grunt.registerTask('default', ['concat:dist', 'ngAnnotate', 'uglify', 'concat:conc']);

};