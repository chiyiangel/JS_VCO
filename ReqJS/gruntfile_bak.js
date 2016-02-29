module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            example: {
                port: 8000,
                base: 'app'
            }
        },
        requirejs: {
            compile: {
                options: {
                    appDir: 'app',
                    baseUrl: '.', // 1
                    dir: 'app/dist', // 2
                    name: 'bower_components/almond/almond', // 3
                    include: 'core/config', // 4
                    mainConfigFile: 'app/core/config.js' // 5
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-connect');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.registerTask('default', 'connect:example');

};
