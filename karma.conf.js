module.exports = function(config) {
    config.set({
        autoWatch: true,
        browsers: ['Chrome'],
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-cookies/angular-cookies.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-sanitize/angular-sanitize.min.js',
            'bower_components/angular-bootstrap/ui-bootstrap.js',
            'bower_components/angular-messages/angular-messages.js',
            'app/**/*.module.js',
            'app/app.js',
            'app/**/*.js',
            'specs/**/*.js'
        ],
        frameworks: ["jasmine"],
        logLevel: config.LOG_DEBUG,
        reporters: ["progress", "beep"],
        plugins : [
            'karma-chrome-launcher',
            'karma-jasmine'
        ]
    });
};