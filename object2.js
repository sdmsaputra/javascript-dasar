// Membuat Object secara Literal
const mahasiswa = {
    nama : "Sadam Saputra",
    nim : "11200430000009",
    email : "sadam.saputra20@mhs.uinjkt.ac.id",
    programStudi : "Perbandingan Mazhab",
    fakultas : "Syariah dan Hukum",
    umur : 21,
    ip : [3.5, 3.1, 4.0, 3.2],
    alamat : {
        kota : "Jakarta Selatan",
        provinsi : "Jakarta",
        negara : "Indonesia",
    }
};

// Membuat Object secara Function declaration
function buatObjectMahasiswa(nama, nim, email, programStudi, fakultas, umur, alamat) {
    const mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.nim = nim;
    mahasiswa.email = email;
    mahasiswa.programStudi = programStudi;
    mahasiswa.fakultas = fakultas;
    mahasiswa.umur = umur;
    mahasiswa.alamat = alamat;
    return mahasiswa;
}
const mahasiswa2 = buatObjectMahasiswa('Raja Ferdiansyah', '11200430000035', 'raja.ferdiansyah20@mhs.uinjkt.ac.id', 'Perbandingan Mazhab', 'Syariah dan Hukum', '20', 'Jakarta Selatan')



// Membuat Object secara Constructor Function | nama function diawali Huruf Besar
function Mahasiswa(nama, nim, email, programStudi, fakultas, umur, alamat) {
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.programStudi = programStudi;
    this.fakultas = fakultas;
    this.umur = umur;
    this.alamat = alamat;
}
const mahasiswa3 = new Mahasiswa('Raja Ferdiansyah', '11200430000035', 'raja.ferdiansyah20@mhs.uinjkt.ac.id', 'Perbandingan Mazhab', 'Syariah dan Hukum', '20', 'Jakarta Selatan');