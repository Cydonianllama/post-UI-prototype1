const title = document.querySelector('.hero-title')
const heroContainer = document.querySelector('.hero-container')

var initVision = -50
var finalVision = -300

var initFontSZ = 64
var finalFontSZ = 0

let newSize = 0
//let newScroll = Math.floor(this.scrollY)
window.addEventListener('scroll',(e)=>{

    let currentRectY = Math.floor(heroContainer.getBoundingClientRect().y)
    if (currentRectY < initVision && currentRectY > finalVision) {
        newSize = 65 -  Math.abs(Math.floor(heroContainer.getBoundingClientRect().y) *initFontSZ/250)
        window.document.body.style.setProperty('--size-title',`${newSize}px`)
    }
    if (heroContainer.getBoundingClientRect().y  > 0){
        window.document.body.style.setProperty('--size-title', `64px`)
    }

    // w3
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    window.document.body.style.setProperty('--progress-w', scrolled + "%")

})