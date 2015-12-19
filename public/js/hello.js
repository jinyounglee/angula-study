/**
 * Created by mufasa on 15. 12. 12.
 */

angular.module('hello', [])
    .controller('HelloController', function($scope, $filter){
        $scope.hello = {
            msg : 'hello'
        }

        $scope.toUpper = function(){
            $scope.hello.msg = $filter('uppercase')($scope.hello.msg);
        }
        $scope.items = [
            {
                title : '볼펜',
                count : 4,
                price : 1800
            },
            {
                title : '지우개',
                count : 1,
                price : 800
            },
            {
                title : '연필',
                count : 12,
                price : 400
            }
        ]

        $scope.delete = function(idx){
            $scope.items.splice(idx, 1);
        }

        $scope.add = function( item ){
            $scope.items.push(item);
            $scope.input = null;
        }

        // 전체 합계
        $scope.sumTotal = function(){
            var total = 0;
            for( var i=0;i< $scope.items.length;i++){
                var price = $scope.items[i].price;
                var count = $scope.items[i].count;
                total += price * count;
            }
            return total;
        }


        $scope.saleTotal = function(){
            
        }
    });
