const loadScreen = document.getElementById('load-screen')

document.addEventListener('DOMContentLoaded', () => {
    const myText = new SplitType("#load-text")
    const myText2 = new SplitType(".split", {charClass: 'letras'})

    gsap.to('.char', {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: .1
    })
    gsap.to('#load-img', {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: .1
    })
    gsap.to('.char', {
        y: -3,
        stagger: 0.5,
        delay: 1,
        duration: .1,
        repeat: -1,
    })
})

function load() {
    loadScreen.style.transform = 'translateY(100%)'
    setTimeout(() => {
        loadScreen.style.display = 'none'
    }, 1000);
}