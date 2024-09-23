function isiForm() {
    document.getElementById('studentForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        alert('form berhasil');
    
        const formData = terimaDataForm();
    
        tampilkanKartu(formData);
    
    });
}



function terimaDataForm() {
    const nama = document.getElementById('nama').value;
    const nis = document.getElementById('nis').value;
    const kelas = document.getElementById('kelas').value;

    return {nama, nis, kelas};
}

function tampilkanKartu(data) {
    document.getElementById('displayNama').textContent = data.nama;
    document.getElementById('displayNIS').textContent = data.nis;
    document.getElementById('displayKelas').textContent = data.kelas;

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
