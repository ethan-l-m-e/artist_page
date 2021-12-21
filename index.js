if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    const responsiveNavItems = document.getElementsByClassName('responsive')
    const toggleButton = document.getElementsByClassName('toggle-button')[0]

    toggleButton.addEventListener('click', () => {
        for (var i = 0; i < responsiveNavItems.length; i++) {
            responsiveNavItems[i].classList.toggle('expanded')
        }
    })
}

function playOrPause() {
    var playButton = document.getElementsByClassName('btn-play')[0]
    if (playButton.classList.contains('paused')) {
        playButton.className = playButton.className.replace('paused', 'playing')
        playButton.innerText = 'pause_circle_outline'
    } else {
        playButton.className = playButton.className.replace('playing', 'paused')
        playButton.innerText = 'play_circle_outline'
    }
}