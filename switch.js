// typedata harus sama
var angka = prompt('Masukkan Angka!');
switch( angka ) {
    // Case harus nilai tidak bisa kondisi
    case '1' :
        alert('anda memasukkan angka ' + angka);
        break;
    case '2' :
        alert('anda memasukkan angka ' + angka);
        break;
    case '3' :
        alert('anda memasukkan angka ' + angka);
        break;
    default :
        alert('Angka yang kamu masukkan salah!')
}

var itemMakanan = prompt('Masukkan daftar makanan untuk mengecek \n makanan itu sehat atau tidak sehat \n contoh: Nasi, Daging, Susu, Fastfood, dan Softdrink.')


// Contoh penggunaan model kedua
switch( itemMakanan ) {
    case 'nasi' :
    case 'daging' :
    case 'susu' :
        alert('Makanan yang kamu input merupakan makanan SEHAT!');
        break;
    case 'fastfood' :
    case 'softdrink' :
        alert('Item yang kamu input merupakan makanan/minuman yang TIDAK SEHAT!');
        break;
    default :
        alert('Kamu memasukkan item yang tidak tepat!');
        break;
}