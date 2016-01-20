module.exports = function(grunt) {
    //grunt wrapper function
    grunt.initConfig({
        concat: {
            js: {
                src: [ './app.js', './services/**/*.js', './controllers/**/*.js' ],
                dest: './build/public/app.js'
            }
        },
        
        uglify: {
            js: { //target
                src: ['./build/public/app.js'],
                dest: './build/public/app.js'
            }
        }
    });

    //load grunt tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //register grunt default task
    grunt.registerTask('default', ['concat', 'uglify']);


}
