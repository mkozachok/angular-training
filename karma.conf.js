module.exports = function(config) {
    config.set({
        autoWatch: true,
        browsers: ['PhantomJS'],
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-sanitize/angular-sanitize.min.js',
            'app/**/*.js',
            'specs/**/*.js'
        ],
        frameworks: ["jasmine"],
        reporters: ["progress", "beep"],
        plugins : [
            'karma-bigdots-reporter',
            'karma-beep-reporter',
            'karma-phantomjs-launcher',
            'karma-jasmine'
        ]
    });
};