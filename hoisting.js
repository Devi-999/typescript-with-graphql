
// test()
// function test(){
//     var x;
//     var x;
//     console.log("value of x is",x);
// }



// function varTest(){
//    var x = 10;
//    var x;
//    var x = 40;
//    console.log(x); 
// }
// varTest()

// function varTest1(){
//     var x = 1
//         {
//             var x = 2;
//             console.log(x)
//         }
//     console.log(x)
// }
// varTest1()

// function letTest(){
//     let x = 1;
//         {
//             let x = 2
//             console.log(x);
//         }
//     console.log(x);
// }
// letTest()

//error
// function letTest(){
//     let x = 1;
        
//             let x = 2 //error
//             console.log(x);
        
//     console.log(x);
// }


//important
var rate = 10
function getRate(){
    //here in the global scope, its assigned as undefined (hoisting)
    //whenever we have a conflict of name in local and global variable, then local variable takes priority
    if(rate === undefined){
        rate = 6;
        return rate;
    } else { 
        return 10
    }
}
console.log('rate', getRate())

//arraw func
// arrow();
// const arrow = () => {console.log('het')}