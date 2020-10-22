function ganti(angka) {
  var folder ='image/' + angka + '.png';
  document.getElementById('image').src = folder
  return false
}

function validasi() {
  var nama = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  var alamat = document.getElementById("alamat").value;
  if (nama != "" && email!="" && alamat !="") {
    return 'Pendaftaran Berhasil!'
  }else{
    alert('Data anda kurang lengkap nih!');
  }
}