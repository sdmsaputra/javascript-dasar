// let a = 8;
// let b = 3;
// let volumeA;
// let volumeB;
// let total;

// volumeA = a * a * a;
// volumeB = b * b * b;

// total = volumeA + volumeB;

// console.log(total);

// a dan b adalah parameter
function jumlahVolumeDuaKubus(a, b) {
    let total, volumeA, volumeB;

    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB;

    return total;
}
// 8 dan 3 adalah argumen
alert(jumlahVolumeDuaKubus(8, 3));