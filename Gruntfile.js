module.exports = function (grunt) {
    'use strict';
    var path = require('path');

    var appPath = 'app/';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            debug: {
                files: [appPath + '**/*.js', appPath + '**/*.html', appPath + '**/*.less'],
                tasks: ['build']
            },
            test: {
                files: [appPath + '**/*.js', appPath + '**/*.html', appPath + '**/*.css', 'specs/**/*.js'],
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
                src: ['app/**/*.js'],
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
                src: ['**/*.html', '!app/index.html'],
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
            }
        },

        copy: {
            main: {
                files: [
                    {src: ['app/index.html'], dest: 'build/index.html'},
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

        parallel: {
            server: {
                options: {
                    grunt: true
                },
                tasks: ["server"]
            },
            watch: {
                options: {
                    grunt: true
                },
                tasks: ["watch:debug"]
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
    grunt.loadNpmTasks('grunt-contrib-concat-sourcemaps');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('run', [ 'build', "express:app", "serverAndWatch"]);
    grunt.registerTask('serverAndWatch', [ 'concurrent:server', "concurrent:watch"]);
    grunt.registerTask('build', [
        'jshint', 'copy:main', 'ngtemplates', 'concat:app',
        'ngAnnotate', 'concat:appAndTpl', "less:app"
    ]);

    grunt.registerTask('test', [ "karma:unit", "watch:test" ]);

    grunt.registerTask('release', ['build', 'uglify:release']);
    grunt.registerTask('server', ['watch:debug', 'express-keepalive:app']);
};