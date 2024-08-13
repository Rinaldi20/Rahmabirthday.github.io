document.addEventListener('DOMContentLoaded', function() {
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = 3 + Math.random() * 2 + 's';
        heart.innerText = '❤️';
        document.getElementById('hearts-container').appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 500);
});
const continueButton = document.getElementById('continueButton');
continueButton.addEventListener('click', function() {
    window.location.href = 'hal3.html'; // Ganti dengan URL halaman yang dituju
});


document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
});

