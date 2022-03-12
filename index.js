
let arr = [4,2,6,1,10];
// let k = 3;
// let pages = 0;
// let newArr = [];

// for (let i = 0; i < arr.length; i++){
//     let nor = Math.floor(arr[i] / k);
//     nor *= 3;

//     if (nor != 0){
//         console.log(nor);
//     }
    
//     let extr = arr[i] % k;
//     // if (extr > 0){
//     //     extr = 1;
//     // }
//     if (extr != 0){
//         console.log(extr);
//     }
    
//     let total = nor + extr;
//     pages += total;
//     // console.log(pages);
// }

// // console.log(pages);

// let str = "3 7 11 1 8 4 3 14 13 10 18 3 3 21 20 24 21 26 22 23 2 21 23 26 31 33 30 33 38 35 34 39 44 3 49 51 54 3 49 53 53 62 59 1 1 62 65 77 78 76 78 80 84 89 94 100 100 100 100 100 100 100 100 3 100 100 100 100 100 100 100 100 100 100 100 100 100 100 100 2 100 100 100 100 100 2 100 100 100 100";
let str = "1 8 19 15 2 29 3 2 25 2 19 26 17 33 22";
let newStr = str.split(" ");
for (let i = 0; i < newStr.length; i++){
    newStr[i] = Number(newStr[i]);
}
console.log(newStr);
