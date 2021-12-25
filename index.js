if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

var playButton

function ready() {
    const responsiveNavItems = document.getElementsByClassName('responsive')
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    playButton = document.getElementsByClassName('btn-play')[0]

    toggleButton.addEventListener('click', () => {
        for (var i = 0; i < responsiveNavItems.length; i++) {
            responsiveNavItems[i].classList.toggle('expanded')
        }
    })
}

/* Toggle material icons play and pause */
function setPlayButton() {
    playButton.parentElement.classList.toggle('playing')
    playButton.innerText = 'play_circle_outline'
}

function setPauseButton() {
    playButton.parentElement.classList.toggle('playing')
    playButton.innerText = 'pause_circle_outline'
}

/* Do on play button click */
function togglePlayPause() {
    if (playButton.parentElement.classList.contains('playing')) {
        setPlayButton()
        pauseVideo()
    } else {
        setPauseButton()
        playVideo()
    }
}

/* Youtube API functions */
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: '62W93dO8FPk',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    })
}

function pauseVideo() {
    player.pauseVideo()
}

function playVideo() {
    player.playVideo()
}

function onPlayerReady() {
    player.setVolume(50)
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        setPlayButton()
    }
}