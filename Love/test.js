const gambarAsli = document.querySelectorAll('.gambar');
const container = document.querySelector('.container');
const tulisan = document.createElement('div');
tulisan.textContent = "Seneng Ga?";
tulisan.classList.add('tulisan');
document.body.appendChild(tulisan);
tulisan.style.display = 'none';

const totalGambar = 10;
const jumlahMunculPerGambar = 10;
const durasiTotal = 45000;
const durasiup = 62000;
const durasiPerGambar = durasiTotal / (totalGambar * jumlahMunculPerGambar);
const semuaGambar = [];

function klonGambar(gambarAsli, delay) {
    const klon = gambarAsli.cloneNode(true);
    container.appendChild(klon);
    klon.style.top = Math.random() * 100 + 'vh';
    klon.style.left = Math.random() * 100 + 'vw';
    klon.style.opacity = 1;

    setTimeout(() => {
        klon.style.top = '50%';
        klon.style.left = '50%';
        klon.style.transform = 'translate(-50%, -50%)';
    }, delay);

    semuaGambar.push(klon);
}

// Fungsi untuk menampilkan gambar satu per satu dan memulai gerakan
function tampilkanDanGerakkanGambar() {
    let index = 0;
    const interval = setInterval(() => {
        semuaGambar[index].style.opacity = 1;
        semuaGambar[index].style.top = Math.random() * 100 + 'vh';
        semuaGambar[index].style.left = Math.random() * 100 + 'vw';
        semuaGambar[index].classList.add('bounce'); // Ganti 'float' dengan kelas animasi yang diinginkan
        index++;
        if (index === semuaGambar.length) {
            clearInterval(interval);
        }
    }, 500);
}

let delay = 0;
gambarAsli.forEach(gambar => {
    for (let i = 0; i < jumlahMunculPerGambar; i++) {
        klonGambar(gambar, delay);
        delay += durasiPerGambar;
    }
});

setTimeout(() => {
    tulisan.style.display = 'block';
    // Setelah semua gambar terkumpul, tampilkan dan gerakkan
    tampilkanDanGerakkanGambar();
}, durasiTotal);

continueButton.addEventListener('click', function() {
    window.location.href = 'hal5.html'; // Ganti dengan URL halaman yang dituju
});