angular.module('customFilter', [])
.filter('unique', function(){
   return function(data, prop){
       if(angular.isArray(data) && angular.isString(prop)){
           var results=[];
           var keys={};



           for(var i=0;i<data.length;i++){
               var val = data[i][prop];
               if( typeof val === 'number'){
                   val = Math.floor(val);
                   if( val == 0 ){
                       val = '';
                   } else if ( val == 1 ){
                       val = '*';
                   } else if ( val == 2 ){
                       val = '**';
                   } else if ( val == 3 ){
                       val = '***';
                   } else if ( val == 4 ){
                       val = '****';
                   } else if ( val == 5 ){
                       val = '*****';
                   }
               }
               if(angular.isUndefined(keys[val])){
                   keys[val] = true;
                   results.push(val);
               }
           }
           return results;
       }else{
           return data;
       }
   }
});