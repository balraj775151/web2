document.addEventListener('DOMContentLoaded', () => {
    const audioElement = document.getElementById('background-music');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');

    // Play/pause background music
    const playPauseButton = document.createElement('button');
    playPauseButton.innerText = 'Pause Music';
    playPauseButton.style.position = 'fixed';
    playPauseButton.style.bottom = '20px';
    playPauseButton.style.right = '20px';
    document.body.appendChild(playPauseButton);

    playPauseButton.addEventListener('click', () => {
        if (audioElement.paused) {
            audioElement.play();
            playPauseButton.innerText = 'Pause Music';
        } else {
            audioElement.pause();
            playPauseButton.innerText = 'Play Music';
        }
    });

    // Swipe to "yes" when "no" is clicked
    noButton.addEventListener('click', () => {
        alert('Are you sure? Clicking No will automatically convert to Yes!');
        yesButton.click();
    });

    yesButton.addEventListener('click', () => {
        alert('Thank you for saying Yes!');
    });
});
