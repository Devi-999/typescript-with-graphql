// (function(){
//     var a = b = 3; 
//   })();
  
//   console.log("a defined? " + ( typeof a));
//   console.log("b defined? " + ( typeof b ));


var x = 10;
function test()
{
    var x = 20;
    
}
 
test();
console.log(x);