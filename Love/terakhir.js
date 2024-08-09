document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll('.slide');
    var video = document.getElementById('myVideo');
    var finishText = document.getElementById('finishText');
    var currentIndex = 0;

    function showSlide(index) {
        if (index >= slides.length) {
            // Sembunyikan semua gambar
            slides.forEach(function(slide) {
                slide.style.display = 'none';
            });
            // Tampilkan video
            video.style.display = 'block';
            video.play();

            // Tampilkan teks "Selesai" setelah video selesai
            video.onended = function() {
                finishText.style.opacity = '1';
                finishText.style.transition = 'opacity 2s, font-size 2s';
                finishText.style.fontSize = '100vh';
            };
        } else {
            // Sembunyikan video dan teks
            video.style.display = 'none';
            finishText.style.opacity = '0';

            // Tampilkan slide saat ini
            slides.forEach(function(slide) {
                slide.style.display = 'none';
            });
            slides[index].style.display = 'block';

            // Lanjutkan ke slide berikutnya setelah 10 detik
            setTimeout(function() {
                showSlide(index + 1);
            }, 100); // Ganti slide setiap 10 detik
        }
    }

    // Mulai dengan slide pertama
    showSlide(currentIndex);
});
