if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    var slideIndex = 1
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

    showSlides(slideIndex)
}

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    var slides = document.getElementsByClassName('gallery-slide')
    var dots = document.getElementsByClassName('gallery-dot')
    if (n < 1) {
        slideIndex = slides.length;
    }
    if (n > slides.length) {
        slideIndex = 1;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '')
    }
    slides[slideIndex-1].style.display = 'block'
    dots[slideIndex-1].className += ' active'
}