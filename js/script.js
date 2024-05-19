function hitungLuas() {
    let alas = document.getElementById('inputAlas').value;
    let tinggi = document.getElementById('inputTinggi').value;
    let luas = 0.5 * alas * tinggi;
    document.getElementById('hasilLuas').innerHTML = `L = 1/2 x ${alas} x ${tinggi} = ${luas} cm<sup>2</sup>`;
}

function resetLuas() {
    document.getElementById('inputAlas').value = '';
    document.getElementById('inputTinggi').value = '';
    document.getElementById('hasilLuas').innerHTML = 'L = 1/2 x ... x ...';
}

function hitungKeliling() {
    let sisiA = document.getElementById('inputSisiA').value;
    let sisiB = document.getElementById('inputSisiB').value;
    let sisiC = document.getElementById('inputSisiC').value;
    let keliling = parseFloat(sisiA) + parseFloat(sisiB) + parseFloat(sisiC);
    document.getElementById('hasilKeliling').innerHTML = `K = ${sisiA} + ${sisiB} + ${sisiC} = ${keliling} cm`;
}

function resetKeliling() {
    document.getElementById('inputSisiA').value = '';
    document.getElementById('inputSisiB').value = '';
    document.getElementById('inputSisiC').value = '';
    document.getElementById('hasilKeliling').innerHTML = 'K = ... + ... + ...';
}

function switchToKeliling() {
    document.getElementById('luas-segitiga-section').style.display = 'none';
    document.getElementById('keliling-segitiga-section').style.display = 'block';
}

function switchToLuas() {
    document.getElementById('keliling-segitiga-section').style.display = 'none';
    document.getElementById('luas-segitiga-section').style.display = 'block';
}
