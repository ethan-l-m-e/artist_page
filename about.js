if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

var youtubeProfilePicture
var youtubeDescription

function ready() {
    const responsiveNavItems = document.getElementsByClassName('responsive')
    const toggleButton = document.getElementsByClassName('toggle-button')[0]

    toggleButton.addEventListener('click', () => {
        for (var i = 0; i < responsiveNavItems.length; i++) {
            responsiveNavItems[i].classList.toggle('expanded')
        }
    })

    youtubeProfilePicture = document.getElementsByClassName('about-artist-image')[0]
    youtubeDescription = document.getElementsByClassName('about-artist-description')[0]
    doWork()
}

async function doWork() {
    try {
        const response = await fetch('https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=UCztEY6czNyJKjRWMwuur9bg&key=AIzaSyD1t8JMVF948JWv5U5FI80JTQRXOavUhME')
        console.log("Response Received From YouTube")
        const processedResponse = await processRequest(response)
        console.log("Response Processed To Json")
        useData(processedResponse)
    } catch (err) {
        console.log(err)
    }
}

function processRequest(response) {
    return response.json()
}

function useData(data) {
    const dataItems = data.items[0]
    youtubeDescription.innerText = dataItems.snippet.description
    youtubeProfilePicture.src = dataItems.snippet.thumbnails.high.url
    youtubeProfilePicture.style.height = 200 + 'px'
    youtubeProfilePicture.style.margin = 15 + 'px'
}