// function createCounter() {
//         var count = 0;
//         function counter() {
//             // var count = 10
//             count = 30 
//             console.log(count);  
//         } 
//         return counter;
//     }
    
//     var increment = createCounter();
    
//     increment();


//     // A closure is an inner function that has access to the outer function's variables and parameters. 
//     //It allows the inner function to access and manipulate the outer function's variables, 
//     //even after the outer function has returned.

//     //usecase: Closures are important in JavaScript because they allow for information hiding and encapsulation.
//     // They also allow for private variables and methods, which can be useful in certain scenarios.

//     // function outer() {

//     //     var x = 10;
        
//     //     function inner() {
        
//     //     console.log(x);
        
//     //     }
        
//     //     return inner;
        
//     //     }
        
//     //     var innerFunc = outer();
        
//     //     innerFunc();


//         // function outer() {

//         //     var x = 10;
            
//         //     function inner() {
            
//         //     console.log(x);
            
//         //     }
            
//         //     x = 20;
            
//         //     return inner;
            
//         //     }
            
//         //     var innerFunc = outer();
            
//         //     innerFunc();
            



//             // function outer() {

//             //     var x = 10;
                
//             //     function inner() {
                
//             //     var y = 5;
                
//             //     console.log(x + y);
                
//             //     }
                
//             //     return inner;
                
//             //     }
                
//             //     var innerFunc = outer();
                
//             //     innerFunc();
            

//                 function outer() {

//                     var x = 10;
//                     var count = 0
//                     function inner() {
                    
//                     var y = 5;
//                     count++
//                     console.log(x + y, count);
                    
//                     }
                    
//                     var x = 20;
                    
//                     return inner;
                    
//                     }
                    
//                     var innerFunc = outer();
                    
//                     innerFunc();





// function outer() {
//     var x = 10; 
//     var count = 0
//     function inner() {
//         var y = 5;
//         count++
//         console.log(x + y, count); 
//         x = 20;
//     }
//     return inner;
//     }
//     var innerFunc = outer();
    
//     innerFunc();
    
//     innerFunc();






// let x = 5;
//  const getX = () => x;
//  const setX = (val) => {
//   x = val;
// };

// console.log(getX());
// setX(10);
// console.log(getX());

//js -> async-> side , sync
// function test (){
//     for(var i =0; i <3; i++){
//         function test1(j){
//             setTimeout(function log(){  
//                 console.log(j)
//             }, 1000)
//         }
//         test1(i)
//     }
// }
// test()
//since this has only one variable, it will run all the ynchronous thing and then get to the asynch stuff

// test() 
// //modify the above snippet to return 123 wwith var keyword

// function test(){
//     for(var i = 0; i<3; i++){
//         function test2(j){  //here function forms closuers, no matter if you use var/let, so its a block scope and everty time its a different j
//             setTimeout(function log(){
//                 console.log(j);
//             },1000)
//         }
//         test2(i)
//     }
// }
// test();



// write a function that runs add(10,20) and add(10)(20)
// function Addition(x){
//     let sum;
//     if(arguments.length > 1){
//         for(let i = 0; i<arguments.length ; i++){
//             sum = sum + arguments[i]
//         }
//         return sum;
//     }else{
//         return function(y){
//             return x + y
//         }
//     }
// }
// console.log(Addition(10,20))
// console.log( Addition(10)(20))
// function add(a,b){
//     return a+b
// }
// function A(a){
//     return function B(b){
//         return a+b
//     }
// }
// console.log(A(10)(20))
// console.log(add(10,20))
// function add (x){
//     let sum= 0
//     if(arguments.length > 1){
//         for(let i = 0; i < arguments.length; i++){
//             sum = sum + arguments[i]
//         }
//         return sum
//     }else {
//         return function(y){
//             return x + y
//         }
//     }
// }
// console.log(add(10)(20));
// console.log(add(10,20));



// write a function for add(10)(20)(30).....add()
// const sum = (a) => {
// 	return (b) => {
//   	return b ? sum(a+b) : a
//   }
// }
// console.log(sum(1)(2)())




// function calculateVol(l, b, h){
//     return l*b*h
// }
// //function currying
// function Cal(l){
//     return function(b){
//         return function(h){
//             return l*b*h
//         }
//     }
// }
// console.log(calculateVol(1,2,3));
// console.log(Cal(1)(2)(3));


// const f = x => x * x; //100
// const g = y => y + y; //200
// g(f(10));
