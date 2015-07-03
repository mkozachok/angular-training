(function(module) {

    var errorProneController = function ($scope, alerting, $http) {
        var model = this;

        model.alertTypes = alerting.alertTypes;
        model.alertType = model.alertTypes[0];
        model.alertMessage = "";

        $scope.isTrue = true;

        model.createAlert = function () {
            alerting.addAlert(model.alertType, model.alertMessage);
            model.alertMessage = "";
            model.alertType = model.alertTypes[0];
        };

        model.createException = function () {
            throw new Error("Something has gone terribly wrong!");
        };
                    
        $http.get("/api/slows")
             .then(function () {
                 // process success
                 // ...
             })
            .catch(alerting.errorHandler("Failed to load data!"));

    };

    module.controller("errorProneController", errorProneController);

}(angular.module("app")));