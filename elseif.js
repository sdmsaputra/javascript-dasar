var angka = prompt('Masukkan Nomor berapapun yang kamu mau');
if( angka % 2 === 0 ) {
    alert(angka + ' adalah bilangan genap');
} else if( angka % 2 === 1 ) {
    alert(angka + ' adalah bilangan ganjil');
} else {
    alert('Masukkan angka dengan benar!');
}