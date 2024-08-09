document.addEventListener('DOMContentLoaded', function() {
    const card = document.getElementById('card');
    const continueButton = document.getElementById('continueButton');
    // const backgroundMusic = document.getElementById('backgroundMusic');

    card.addEventListener('click', function() {
        card.classList.toggle('flipped');
        toggleAudio();
    });


    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = 2 + Math.random() * 3 + 's';
        heart.innerText = '😘';
        document.getElementById('hearts-container').appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    setInterval(createHeart, 700);

    continueButton.addEventListener('click', function() {
        window.location.href = 'utama.html'; // Ganti dengan URL halaman yang dituju
    });
    
//    function toggleAudio() {        if (backgroundMusic.paused) {
//            backgroundMusic.play();
//         } else {
//            backgroundMusic.pause();
//        }
//     }
});
