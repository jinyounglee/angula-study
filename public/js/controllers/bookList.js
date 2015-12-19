/**
 * Created by mufasa on 15. 12. 8.
 */
angular.module('book')
.controller('bookListCtrl', function($scope, $filter){
        var selectedCategory = null;
        $scope.selectedCategory = function(newCategory){
            selectedCategory = newCategory;
        }

        $scope.selectedFilterFn = function(book){
            return selectedCategory == null || book.category == selectedCategory;
        }
    });