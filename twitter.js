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