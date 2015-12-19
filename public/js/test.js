/**
 * Created by mufasa on 15. 12. 15.
 */

console.log('dddd');

/*

var a = 1;
function f(){
    if(true){
        var c = 2;
    }
    return c;
}

console.log( f() );
*/

function f(){
    g = "global";     // 함수 f()가 호출 될때 글로벌 변수 g 에 global이 할당 
}
f();
console.log(g);

var num = 2323.2323;
var ee = Math.ceil(num);

console.log(ee);