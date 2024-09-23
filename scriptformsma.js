function isiForm() {
    document.getElementById('studentForm').addEventListener('submit', function(event) {
        event.preventDefault();

        alert('Pengiriman Form berhasil. Cek kartumu di bawah');

        const formData = terimaDataForm();
        tampilkanKartu(formData);
    });
}

function terimaDataForm() {
    const nama = document.getElementById('nama').value;
    const nis = document.getElementById('nis').value;
    const kelas = document.getElementById('kelas').value;
    const tgl_lahir = document.getElementById('tgl_lahir').value;

    // Radio buttons for gender
    const jenis_kelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;

    // Checkboxes for extracurricular activities
    const ekstrakurikuler = Array.from(document.querySelectorAll('input[name="ekstrakurikuler[]"]:checked')).map(el => el.value).join(', ');

    const email = document.getElementById('email').value;
    const telepon = document.getElementById('telepon').value;

    return { nama, nis, kelas, tgl_lahir, jenis_kelamin, ekstrakurikuler, email, telepon};
}

function tampilkanKartu(data) {
    document.getElementById('displayNama').textContent = data.nama;
    document.getElementById('displayNIS').textContent = data.nis;
    document.getElementById('displayKelas').textContent = data.kelas;
    document.getElementById('displayTglLahir').textContent = data.tgl_lahir;
    document.getElementById('displayJenisKelamin').textContent = data.jenis_kelamin;
    document.getElementById('displayEkstra').textContent = data.ekstrakurikuler;
    document.getElementById('displayEmail').textContent = data.email;
    document.getElementById('displayNoTelp').textContent = data.telepon;

    document.getElementById('kartuSiswa').classList.remove('hidden');
}



// function IsiDataKartu() {
//     document.getElementById('studentForm').addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent form from refreshing the page

//          // Get form data
//          const nama = document.getElementById('nama').value;
//          const nis = document.getElementById('nis').value;
//          const kelas = document.getElementById('kelas').value;
 
//          // Display the data in the card
//          document.getElementById('displayNama').textContent = nama;
//          document.getElementById('displayNIS').textContent = nis;
//          document.getElementById('displayKelas').textContent = kelas;

//         // Show the card
//         document.getElementById('kartuSiswa').classList.remove('hidden');
//     });
// }
