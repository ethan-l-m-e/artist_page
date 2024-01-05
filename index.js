if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

var overlayFrame
var playButton
var playerStatus

function ready() {
    const responsiveNavItems = document.getElementsByClassName('responsive')
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    
    
    playButton = document.getElementsByClassName('btn-play')[0]
    playerStatus = playButton.parentElement.getElementsByClassName('player-status')[0]

    toggleButton.addEventListener('click', () => {
        for (var i = 0; i < responsiveNavItems.length; i++) {
            responsiveNavItems[i].classList.toggle('expanded')
        }
    })
}

function toggleOverlay() {
    overlayFrame = document.getElementsByClassName('target-frame')[0]
    overlayFrame.classList.toggle('overlay-active')
    overlayFrame.parentElement.classList.toggle('overlay-active')
    document.body.classList.toggle('unscrollable')
    if (!overlayFrame.classList.contains('overlay-active')) {
        setIframe()
    }
}

/* Used to cut off audio by replacing iframe element */
function setIframe() {
    overlayFrame.parentElement.innerHTML = `<button class="btn btn-danger exit-frame-button" onclick="toggleOverlay()" role="button">&#x2715</button>
    <iframe class="target-frame" name="targetframe" allowTransparency="true" scrolling="yes" frameborder="0" ></iframe>`
}

function initPlayButton() {
    playButton.classList.add('player-ready')
}

/* Toggle material icons play and pause */
function setPlayButton() {
    playButton.parentElement.classList.toggle('playing')
    playButton.src = 'Images/Play Circle.svg'
}

function setPauseButton() {
    playButton.parentElement.classList.toggle('playing')
    playButton.src = 'Images/Pause Circle.svg'
}

/* Do on play button click */
function togglePlayPause() {
    if (playButton.parentElement.classList.contains('playing')) {
        //setPlayButton() //--> moved down to onPlayerStateChange()
        pauseVideo()
    } else {
        //setPauseButton() //--> moved down to onPlayerStateChange()
        playVideo()
    }
}

/* Youtube API functions */
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'BMj3Wc9hHng',
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
    player.setVolume(35)
    initPlayButton()
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        playerStatus.innerText = '再生中'
        if (!playButton.parentElement.classList.contains('playing')) {
            setPauseButton()
        }
        return
    }

    playerStatus.innerText = '一時停止'
    if (playButton.parentElement.classList.contains('playing')) {
        setPlayButton()
    } 
}