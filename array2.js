// 1. Manipulasi Array

// const arr = [];
// arr[0] = "Sadam";
// arr[1] = "Sarah";
// arr[2] = "Sandra";
// arr[3] = "Saputra";

// console.log(JSON.stringify(arr));

// 2. Menghapus isi Array

// const arr = ["sadam", "lder", "sandra", "nofa"];
// arr[2] = undefined;
// console.log(arr);


//  3. Menampilkan isi Array
// const arr = ["sadam", "lder", "sandra", "nofa"];

// for (let i = 0; i < arr.length; i++) {
//     console.log("Mahasiswa ke " + (i+1) + ":" + arr[i]);
// }

// 4. Method pada array
// const arr = ["sadam", "lder", "sandra", "nofa"];

// a. JOIN
// console.log(arr.join('-'));

// b. Push
// arr.push('Deddy');
// console.log(arr.join('-'));

// C. Pop
// arr.pop();
// console.log(arr.join('-'));

// d. unshift dan shift
// arr.unshift('Darty');
// console.log(arr.join('-'));

// e. splice
// arr.splice(2, 0, 'Darty');
// console.log(arr.join('-'));

// f. Slice
// const arr2 = arr.slice(1,3);
// console.log(arr2.join('-'));

// g. Foreach
// const number = [1,2,3,4,5,6,7,8,9];
// const names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
// // for( let i = 0; i < number.length; i++) {
// //     console.log(number[i]);
// // }

// // number.forEach(function(e) {
// //     console.log(e);
// // });
// names.forEach(function(e, i) {
//     console.log('Bulan ke- '+ (i+1) + ' adalah' + e);
// });

// h. Map
// const number = [1,2,3,4,5,6,7,8,9];
// const number2 = number.map(function(e) {
//     return e * 2;
// });
// console.log(number2.join('-'));

// i. Sort
// const number = [3,5,2,4,7,9,8];
// number.sort();
// console.log(number.join('-'));

// j. Filter
// const number = [1,2,3,4,5,6,7,10,9,8,20];
// const number2 = number.filter(function(e) {
//     return e == 5;
// });
// console.log(number2.join('-'));