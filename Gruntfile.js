var creds = require( 'credentials.json' );
/* Looks like

 {
 	"email": "email@email.com",
 	"password": "somepassword"
 }

*/

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        screeps: {
            options: {
                email: creds.email,
                password: creds.password,
                branch: 'dev'
            },
            dist: {
                src: ['dist/dev/*.js']
            }
        }
    });
}