__mainApp

.controller("TruthfulCtrl",
            function ($scope) {
                console.log(this);
                console.log($scope);
                $scope.truthfulMessage ='';                 
                $scope.$watch('data', function(newVal, oldVal)
                                {
                                    console.log(newVal);
                                    if (typeof newVal  == 'object' && newVal.hasOwnProperty('result') ) {
                                       $scope.truthfulMessage = newVal.Message;
                                    }
                                   
                                })

});