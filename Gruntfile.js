'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			compass: {
				files: ['sass/{,**/}*.scss'],
				tasks: ['compass']
			},
			livereload: {
				options: {
					livereload: true
				},
				files: [
					'css/*.css',
					'js/*.js',
					'*.html'
				]
			}
		},
		compass: {
			options: {
				cssDir: 'css',
				sassDir: 'sass',
				imagesDir: 'images',
				javascriptsDir: 'js',
				assetCacheBuster: 'none',
				require: [
					'sass-globbing'
				]
			},
			dev: {
				options: {
					environment: 'development',
					outputStyle: 'expanded',
					relativeAssets: true,
					raw: 'line_numbers = :true\n'
				}
			},
			dist: {
				options: {
					environment: 'production',
					outputStyle: 'compact',
					force: true
				}
			}
		},
		connect: {
			server: {
				options: {
					port: 9001,
					base: './'
				}
			}
		},
		bgShell: {
			make: {
				cmd: 'make',
				stdout: true,
				bg: true
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-bg-shell');
	grunt.registerTask('default', [
		'compass:dev',
		'connect',
		'bgShell:make',
		'watch'
	]);
};