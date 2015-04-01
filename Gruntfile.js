module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
				pkg : grunt.file.readJSON('package.json'),
				
			    banner: '/*!\n' +
	            ' * =====================================================\n' +
	            ' * Ratchet v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
	            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
	            ' * Licensed under <%= pkg.license %> (https://github.com/twbs/ratchet/blob/master/LICENSE)\n' +
	            ' *\n' +
	            ' * v<%= pkg.version %> designed by @connors.\n' +
	            ' * =====================================================\n' +
	            ' */\n',
				
				concat : {
					ratchet_js : {
						options : {
							banner : '<%= banner %>'
						},
						src : [
								'plugins/ratchet-2.0.2/js/modals.js',
								'plugins/ratchet-2.0.2/js/popovers.js',
								'plugins/ratchet-2.0.2/js/push.js',
								'plugins/ratchet-2.0.2/js/segmented-controllers.js',
								'plugins/ratchet-2.0.2/js/sliders.js',
								'plugins/ratchet-2.0.2/js/toggles.js' ],
						dest : 'plugins/ratchet-2.0.2/dist/js/ratchet.js'
					},
					ratchet_ios_css : {
						options : {
							banner : '<%= banner %>'
						},
						src : [ 'plugins/ratchet-2.0.2/dist/css/ratchet.css',
								'plugins/ratchet-2.0.2/dist/css/theme-ios.css', ],
						dest : 'plugins/ratchet-2.0.2/dist/css/ratchet-theme-ios.css'
					},
					ratchet_android_css : {
						options : {
							banner : '<%= banner %>'
						},
						src : [
								'plugins/ratchet-2.0.2/dist/css/ratchet.css',
								'plugins/ratchet-2.0.2/dist/css/theme-android.css', ],
						dest : 'plugins/ratchet-2.0.2/dist/css/ratchet-theme-android.css'
					}
				},
				uglify : {
					my_target : {
						files : {
							'plugins/ratchet-2.0.2/dist/js/ratchet.min.js' : [ 'plugins/ratchet-2.0.2/dist/js/ratchet.js' ]
						}
					}
				},
				clean : {
					dist : [ 'plugins/ratchet-2.0.2/dist/js',
							'plugins/ratchet-2.0.2/dist/css' ]
				},

				sass : {
					dist : {
						files : {
							'plugins/ratchet-2.0.2/dist/css/ratchet.css' : 'plugins/ratchet-2.0.2/sass/ratchet.scss',
							'plugins/ratchet-2.0.2/dist/css/theme-ios.css' : 'plugins/ratchet-2.0.2/sass/theme-ios.scss',
							'plugins/ratchet-2.0.2/dist/css/theme-android.css' : 'plugins/ratchet-2.0.2/sass/theme-android.scss',
							'plugins/ratchet-2.0.2/dist/css/docs.css' : 'plugins/ratchet-2.0.2/sass/docs.scss'
						}
					}
				},

				cssmin : {
					target : {
						files : [ {
							expand : true,
							cwd : 'plugins/ratchet-2.0.2/dist/css',
							src : [ '*.css', '!*.min.css' ],
							dest : 'plugins/ratchet-2.0.2/dist/css',
							ext : '.min.css'
						} ]
					}
				}

			});

	// 加载包含 "uglify" 任务的插件。
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// 默认被执行的任务列表。
	grunt.registerTask('default', [ 'clean', 'sass', 'concat', 'uglify','cssmin', 'uglify' ]);
};