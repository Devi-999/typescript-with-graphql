
// const arr1 = [1,2,3]
// // const arr2 = arr1;
// const arr2 = [...arr1] //memory ek addres bnana leta
// arr2.push(10)
// console.log(arr1, arr2);


// const users = {
//     name: 'sej',
//     city: 'Pune'
// }
// const user1 = {...users}
// user1.name = "sejuti"
// console.log(user1, users);






// function qn3() {
//     const user1 = {
//         name: 'sej',
//         age: '12',
//         location: {
//             city: {
//                 pin: '411057',
//                 name: 'Pune'
//             },
//             state: 'Maharashtra',
            
//         }
//     }
//     // const user2 = {...user1}

//     user2.age='10'
//     user2.location.city.name = 'Mumbai';
//     console.log(user1);
//     console.log(user2);
// }
// qn3();


// function qn4(){
//     const test = {
//         sampleFunction: console.log,
//         sampleValue: undefined,
//         sampleValue2: NaN,
//         sampleValue: -Infinity,
//         sampleFunction2: qn3,
//     }
//     // const test2 = JSON.parse(JSON.stringify(test));
//     console.log(test, test2)
// }
// qn4()
// if we have deeper level, then use JSON>stringyfy to make deep copy
// JSON.stringify will convert an obj into an string and JSON>parse will convert an string into obj
//but in some scenarios, JSON.parse and JSON.stringyfy cannot use-> date() , functions(), infinity, NAN, undefined because they are
//JSON unsafe values,
//how do we deep copy, JSON unsafe values? >>>>> Copying all the values one after another
// >>>>> Recursive copying all the values and using libraries like lodash