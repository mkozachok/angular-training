module.exports = function (grunt) {
    'use strict';
    var path = require('path');

    var appPath = 'app/';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            debug: {
                files: [appPath + '**/*.js', appPath + '**/*.html', appPath + '**/*.css'],
                tasks: ['build']
            },
            test: {
                files: [appPath + '**/*.js', appPath + '**/*.html', 'specs/**/*.js'],
                tasks: ['karma:unit:run']
            }
        },

        less: {
            app: {
                options: {
                    paths: ["app/less"],
                    cleancss: true
                },
                files: {
                    "build/app.css": "app/**/*.less"
                }
            }
        },

        concat: {
            app: {
                options: {
                    sourceMap: true,
                    sourceMapName: "build/sourcemap.map",
                    sourceMapStyle: "link"
                },
                src: ['app/app.js', 'app/**/*.js'],
                dest: 'build/<%= pkg.name %>.js'
            },
            appAndTpl: {
                src: ['build/<%= pkg.name %>.js', 'build/templates.js'],
                dest: 'build/<%= pkg.name %>.js'
            }
        },

        jshint: {
            all: [appPath + '**/*.js']
        },

        ngAnnotate: {
            app: {
                files: {
                    'build/<%= pkg.name %>.js': ['build/<%= pkg.name %>.js']
                }
            }
        },

        ngtemplates: {
            app: {
                cwd: 'app',
                src: ['**/*.html', '!index.html'],
                dest: 'build/templates.js'
            }
        },

        express: {
            app: {
                options: {
                    bases: [path.resolve('app')],
                    port: 8000,
                    server: path.resolve(__dirname, 'server.js')
                }
            },
            debug: {
                options: {
                    bases: [path.resolve('app')],
                    port: 8000,
                    server: path.resolve(__dirname, 'server.js') + ' debug'
                }
            }
        },

        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'app/', src: ['*.css'], dest: 'build/'},
                    {expand: true, cwd: "app/", src: ['**/*.jpg', "**/*.png", "**/*.gif"], dest: 'build/'}
                ]
            }
        },

        uglify: {
            release: {
                files: {
                    'build/<%= pkg.name %>.<%= pkg.version %>.min.js': ['build/<%= pkg.name %>.js']
                }
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                background: true,
                singleRun: false
            }
        },

        concurrent: {
            server: {
                tasks: ["server"],
                options: {
                    logConcurrentOutput: true
                }
            },
            watch: {
                tasks: ["watch:debug"],
                options: {
                    logConcurrentOutput: true
                }
            },
            test: {
                tasks: ["watch:test"],
                options: {
                    logConcurrentOutput: true
                }
            }
        },

        processhtml: {
            dist: {
                files: {
                    'build/index.html': ['app/index.html']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-angular-templates');
    //grunt.loadNpmTasks('grunt-contrib-concat-sourcemaps');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-processhtml');

    grunt.registerTask('run', [ 'build', "express:app", "serverAndWatch"]);
    grunt.registerTask('serverAndWatch', [ 'concurrent:server', "concurrent:watch"]);
    grunt.registerTask('build', [
        'jshint', 'processhtml', 'copy:main', 'ngtemplates', 'concat:app',
        'ngAnnotate', 'concat:appAndTpl', "less:app"
    ]);

    grunt.registerTask('debug', [ "express:app", 'express-keepalive:app' ]);
    grunt.registerTask('test', [ "karma:unit", "concurrent:test" ]);

    grunt.registerTask('release', ['build', 'uglify:release']);
    grunt.registerTask('server', ['watch:debug', 'express-keepalive:app']);
};