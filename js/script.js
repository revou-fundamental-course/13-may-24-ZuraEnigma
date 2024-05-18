
function hitungLuas(sisi) {
    return sisi * sisi;
  }
  
  
  function hitungKeliling(sisi) {
    return 4 * sisi;
  }
  
  
  var formLuas = document.getElementById('form_persegi');
  var formKeliling = document.getElementById('form_keliling');
  var outputLuas = document.getElementById('output_luas');
  var outputKeliling = document.getElementById('output_keliling');
  
  // Menangani submit form untuk menghitung luas
  formLuas.addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah refresh halaman
  
    var sisi = parseInt(document.getElementById('sisi-luas').value);
  
    if (isNaN(sisi) || sisi <= 0) {
      outputLuas.innerHTML = 'Masukkan nilai sisi yang valid!';
    } else {
      var luas = hitungLuas(sisi);
      outputLuas.innerHTML = 'Luas: ' + luas;
    }
  });
  
  // Menangani submit form untuk menghitung keliling
  formKeliling.addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah refresh halaman
  
    var sisi = parseInt(document.getElementById('sisi-keliling').value);
  
    if (isNaN(sisi) || sisi <= 0) {
      outputKeliling.innerHTML = 'Masukkan nilai sisi yang valid!';
    } else {
      var keliling = hitungKeliling(sisi);
      outputKeliling.innerHTML = 'Keliling: ' + keliling;
    }
  });