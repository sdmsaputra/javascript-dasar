const mahasiswa = {
    nama : 'Sadam Saputra',
    lulus : false,
    ipSemester : [3.10, 3.20, 3.40, 3.50, 3.20],

    ipKumulatif : function() {
        let total = 0;
        let ips = this.ipSemester;
        for (let i = 0; i < ips.length; i++) {
            total += ips[i];
        }
        return total/ips.length;
    }
}
mahasiswa.ipKumulatif();

// Anatomi Objects
const kucing = {
    // Properties
    nama : 'Kucing',
    lulus : true,
    ipSemester : [3.10, 3.20, 3.40, 3.50, 3.20],
    // properties

    // method
    ipKumulatif : function() {
        let total = 0;
        let ips = this.ipSemester;
        for (let i = 0; i < ips.length; i++) {
            total += ips[i];
        }
        return total/ips.length;
    }
}