 (function() {
     angular.module("app.business")
         .filter('getSecond', function() {
             return function(input) {
                 if (input.parent_id == 2 || input.parent_id == 44) {
                     return input;
                     console.log(1)
                 } else {
                     return;
                 }
             }
         })
 })();
