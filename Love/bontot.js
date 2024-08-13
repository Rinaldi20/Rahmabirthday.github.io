document.addEventListener('DOMContentLoaded', function() {
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = 3 + Math.random() * 2 + 's';
        heart.innerText = '💕';
        document.getElementById('hearts-container').appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 500);
});

var finishText = document.getElementById('finishText');
// Tampilkan teks "Selesai" setelah video selesai
video.onended = function() {
    finishText.style.opacity = '1';
    finishText.style.transition = 'opacity 2s, font-size 2s';
    finishText.style.fontSize = '100vh';
};

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
});

