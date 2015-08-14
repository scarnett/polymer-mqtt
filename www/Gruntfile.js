module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    vulcanize: {
      default: {
        options: {
          inlineScripts: true,
          inlineCss: true,
          stripComments: true
        },

        files: {
          '../build/www/index.html': 'index.html'
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-vulcanize');

  grunt.registerTask('default', ['vulcanize']);
};
