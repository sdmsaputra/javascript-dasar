var tanya = true;
while ( tanya ) {
// Menangkap Pilihan Pemain

    var p = prompt('Silakan pilih: batu, gunting, kertas');

    // Menangkap Pilihan Komputer

    // Generate Bilangan Random

    var com = Math.random();

    if(com < 0.34) {
        com = 'batu';
    } else if(com >= 0.34 && com < 0.67 ) {
        com = 'gunting';
    } else {
        com = 'kertas';
    }

    var hasil = '';
    // Menentukan rules kalah dan Menang

    if( p == com ) {
        hasil = 'SERI';
    } else if( p == 'batu' ) {
        // if( com == 'gunting ') {
        //     hasil = 'MENANG'
        // } else {
        //     hasil = 'KALAH!';
        // }
        hasil = ( com == 'gunting') ? 'MENANG!' : 'KALAH!';
    } else if( p == 'gunting' ) {
        hasil = ( com == 'kertas') ? 'KALAH!' : 'MENANG!';
    } else if( p == 'kertas' ) {
        hasil = ( com == 'batu') ? 'MENANG!' : 'KALAH!';
    } else {
        hasil = 'Kamu memasukkan pilihan yang salah!';
    }

    // Menampilkan Hasil
    alert('Kamu telah memilih' + p + 'dan Computer memilih ' + com + '\nMaka hasilnya kamu: ' + hasil );
    tanya = confirm('Main Lagi?');
}
alert('Terimakasih sudah bermain');