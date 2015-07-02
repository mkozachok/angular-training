__mainApp

.controller("TruthfulCtrl",
            function ($scope) {
                
                this.truthfulMessage =''; 
                this.truthfulClass = '';

                var self = this;
                $scope.$watch('thruthful.data', function(newVal, oldVal)
                                {
                                    if (typeof newVal  === 'object' && newVal.hasOwnProperty('Result') ) {
                                       self.truthfulMessage = newVal.Message;
                                       self.truthfulClass = (newVal.Result?'text-success':'text-danger');
                                    }
                                   
                                })

});