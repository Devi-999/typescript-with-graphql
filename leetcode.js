// var maxProfit = function(prices) {
//     let profit = 0
//     for(let i =0 ;i<prices.length;i++){
//         if(prices[i] > prices[i-1]){
//             profit += (prices[i]-prices[i-1])
//         }
//     }
//     return profit
// };
// console.log(maxProfit([7,1,5,3,6,2,7]))

var reverseWords = function(s) {
    return s.split(" ").reverse().filter((e => e !== " ")).join(" ")
};

console.log(reverseWords('a good   example'))