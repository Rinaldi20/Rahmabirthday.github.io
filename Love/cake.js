document.addEventListener('DOMContentLoaded', function() {
    const cake = document.getElementById('cake');
    const face = document.getElementById('face');
    const game = document.getElementById('game');
    const congrats = document.getElementById('congrats');
    const nextPageButton = document.getElementById('nextPageButton');


    let cakeHit = false;

    // Function to handle dragging the face
    face.onmousedown = function(event) {
        let shiftX = event.clientX - face.getBoundingClientRect().left;
        let shiftY = event.clientY - face.getBoundingClientRect().top;

        function moveAt(pageX, pageY) {
            face.style.left = pageX - shiftX + 'px';
            face.style.top = pageY - shiftY + 'px';

            checkCollision();
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        face.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            face.onmouseup = null;
        };
    };

    face.ondragstart = function() {
        return false;
    };

    function checkCollision() {
        const faceRect = face.getBoundingClientRect();
        const cakeRect = cake.getBoundingClientRect();

        if (!cakeHit && isColliding(faceRect, cakeRect)) {
            cakeHit = true;
            cake.style.display = 'none';
            createNewCakes();
        }

        document.querySelectorAll('.new-cake').forEach(newCake => {
            const newCakeRect = newCake.getBoundingClientRect();
            if (isColliding(faceRect, newCakeRect)) {
                newCake.remove();
                if (document.querySelectorAll('.new-cake').length === 0) {
                    showCongrats();
                }
            }
        });
    }

    function isColliding(rect1, rect2) {
        return !(rect1.right < rect2.left || 
                 rect1.left > rect2.right || 
                 rect1.bottom < rect2.top || 
                 rect1.top > rect2.bottom);
    }

    function createNewCakes() {
        for (let i = 0; i < 30; i++) {
            const newCake = document.createElement('img');
            newCake.src = 'img/cake.png';
            newCake.className = 'new-cake';
            newCake.style.position = 'absolute';
            newCake.style.width = '50px';
            newCake.style.height = '50px';
            newCake.style.left = Math.random() * (window.innerWidth - 50) + 'px';
            newCake.style.top = Math.random() * (window.innerHeight - 50) + 'px';
            game.appendChild(newCake);
        }
    }

    function showCongrats() {
        game.classList.add('hidden');
        congrats.classList.remove('hidden');
    }

    nextPageButton.addEventListener('click', function() {
        window.location.href = 'test.html';
        alert('Navigating to the next page...');
    });


            

    
});
