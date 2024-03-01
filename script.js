let timer;
let startTime;


function getRandomPauseDuration() {
    return Math.random() * 3000;
}

function startBreathing() {
    const breathingCircle = document.getElementById('breathingCircle');
    const button = document.querySelector('button');
    const text = document.getElementById('text-container');

    button.style.display = 'none';
    text.style.display = 'none';
    
    breathingCircle.style.display = 'block';
    
    startTime = Date.now();
    
    animateBreathing(breathingCircle);
}

        
function animateBreathing(circle) {
    
    const elapsedTime = Date.now() - startTime;
    if (elapsedTime < 60000) {
        
        const scale = Math.floor(Math.random()*4) + 1;
        circle.style.transition = 'transform 10s ease-in-out';
        circle.style.transform = `scale(${scale})`;

    timer = setTimeout(() => {
        circle.style.transition = 'transform 10s ease-in-out';
        circle.style.transform = 'scale(1)';

        setTimeout(() => {
            animateBreathing(circle);
        }, getRandomPauseDuration());
    }, 5000);
    
    } else {
        stopBreathing();
        
    }
}

function stopBreathing() {
    const breathingCircle = document.getElementById('breathingCircle');
    const button = document.querySelector('button');
    breathingCircle.style.transform = 'scale(1)';
    button.textContent = 'Restart';
    button.style.display = 'block';
    startTime = null;
    clearTimeout(timer);
}
