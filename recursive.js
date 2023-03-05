function cetakAngka(n) {
    if ( n === 0 ) {
        return;
    }
    console.log(n);
    cetakAngka(n-1);
}

cetakAngka(10);

function factorial(n) {
    if ( n === 0 ) return 1;
    return n * factorial(n-1);
}