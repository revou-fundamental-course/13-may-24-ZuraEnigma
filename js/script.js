function hitungLuas() {
    var alas = parseFloat(document.getElementById('inputAlas').value);
    var tinggi = parseFloat(document.getElementById('inputTinggi').value);
    if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
        alert('Mohon masukkan nilai yang valid untuk alas dan tinggi.');
        return;
    }
    var luas = 0.5 * alas * tinggi;
    document.getElementById('hasilLuas').innerHTML = "L = 1/2 x " + alas + " x " + tinggi + " = " + luas;
}
