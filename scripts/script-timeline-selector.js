const timelineSelector = document.getElementById("selector-timeline")
const aviso = document.getElementById("timeline")
let jaClicou = false

aviso.addEventListener('click', () => {
    if (jaClicou) {
        timelineSelector.style.transform = 'translateY(30vh)'
        jaClicou=false
    } else {
        timelineSelector.style.transform = 'translateY(0)'
        jaClicou=true
    }
})

function scrollParaPixel(pixels) {
    window.scroll({
        top: pixels,
        behavior: 'smooth'
    });
}

if (screen.width < 1300) {
    const um = document.getElementById("introducao-selector")
    const dois = document.getElementById("sobre-mim-selector")
    const tres = document.getElementById("projetos-selector")
    const quatro = document.getElementById("contato-selector")
    document.querySelector(`#selector-timeline > div:nth-child(1) > span`).setAttribute("onclick","scrollParaPixel(0);")
    document.querySelector(`#selector-timeline > div:nth-child(2) > span`).setAttribute("onclick","scrollParaPixel(15801);")
    document.querySelector(`#selector-timeline > div:nth-child(3) > span`).setAttribute("onclick","scrollParaPixel(21801);")
    document.querySelector(`#selector-timeline > div:nth-child(4) > span`).setAttribute("onclick","scrollParaPixel(38000);")
    document.querySelectorAll("#selector-timeline > div").forEach((e) => {
        e.style.flexDirection = 'row'
        e.style.marginTop = '12.5px'
        e.style.bottom = '12.5px'
    })
    timelineSelector.style.display = 'flex'
    timelineSelector.style.flexDirection = 'column'
    um.innerHTML=''
    um.style=`
    margin: 0;
    width: 0;
    height: 0;
    margin-right: 20px
    `
    dois.innerHTML=''
    dois.style=`
    margin: 0;
    width: 0;
    height: 0;
    margin-right: 20px
    `
    tres.innerHTML=''
    tres.style=`
    margin: 0;
    width: 0;
    height: 0;
    margin-right: 20px
    `
    quatro.innerHTML=''
    quatro.style=`
    margin: 0;
    width: 0;
    height: 0;
    margin-right: 20px
    `
}

if ('ontouchstart' in window ) {
    document.getElementById('aviso').innerHTML = `<img style="
    height: 25px; 
    width: 25px; 
    " src="imgs/icones/menu.svg" alt="">`
    if (screen.width > 900) {
        document.getElementById('aviso').style = `
        transform: translateY(-13px);
        position: fixed;
        left: 96%;
        `
    } else if (screen.width < 900 && screen.width > 580) {
        document.getElementById('aviso').style = `
        transform: translateY(-13px);
        position: fixed;
        left: 94%;
        `
    } else if (screen.width < 580 && screen.width > 390) {
        document.getElementById('aviso').style = `
        transform: translateY(-13px);
        position: fixed;
        left: 92%;
        ` 
    } else if (screen.width < 390) {
        document.getElementById('aviso').style = `
        transform: translateY(-13px);
        position: fixed;
        left: 90%;
        ` 
    }
}