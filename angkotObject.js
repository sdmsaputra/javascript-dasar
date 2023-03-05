// Membuat Object Angkot
function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar) {
        if(this.penumpang.length === 0 ) {
            alert("Angkot kamu masih kosong!");
            return false;
        }
        for(let i = 0; i < this.penumpang.length; i++) {
            if(this.penumpang[i] === namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this;
            }
    
    }
}
};
const angkot1 = new Angkot('Sadam Saputra', ['Jakarta', 'Bandung'], [], 0);
const angkot2 = new Angkot('Suku', ['Tangerang', 'Bogor'], [], 0);