
// console.log(square);
// console.log(square(10));
// // const square = function (n) {
// //     return n * n;
// // }

// var square = function (n) {
//     return n * n;
// }

// var num1 = 20, num2= 30, names = "sej"
// function getScore(){
//     var num1=2, num2 = 3;
//     function add(){
//         return names + 'score' + (num1+num2)
//     }
//     return add();
// }
// console.log(getScore())
// console.log(getScore())

// function addSquare(a,b){
//     function square(x){
//         return x * x
//     }
//     return square(a) + square(b)
// }
// console.log(addSquare(10,20));

function A(x){
    function B(y){
        function C(z){
            console.log(x+y+z)
        }
        C(3);
    }
    B(2);
}
console.log(A(1))