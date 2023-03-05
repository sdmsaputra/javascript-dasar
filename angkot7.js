const penumpang = [];
const tambahPenumpang = function(namaPenumpang, penumpang) {
    if( penumpang.length == 0 ) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        for( let i = 0; i < penumpang.length; i++) {
            if(penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            }
        }
    }
}