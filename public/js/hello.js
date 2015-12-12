/**
 * Created by mufasa on 15. 12. 12.
 */

angular.module('hello', [])
    .controller('HelloController', function($scope){
        $scope.hello = {
            msg : '안녕하세요.'
        }
    });

