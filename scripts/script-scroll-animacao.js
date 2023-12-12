//Carregando alguns elementos das animações
const filled = document.querySelector('.filled')
const span1 = document.getElementById('span1')
const span2 = document.getElementById('span2')
const span3 = document.getElementById('span3')
const center = document.querySelector('.center')
const tituloprojetos = document.getElementById('titulo-projetos')
const projetos = document.getElementById('projetos')
const infos = document.getElementById('infos')
const msgBola = document.getElementById('msgs-bola')

window.addEventListener('scroll', () => {
    //BARRA DE PROGRESSO
    filled.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`
})

//Aqui aconteceram as animações
document.addEventListener('DOMContentLoaded', () => {
    // lenis (smooth scroll)
    const lenis = new Lenis()
    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // animations with gsap (in scroll)
    gsap.registerPlugin(ScrollTrigger)

    //ANIMAÇÃO 1 (gato no meio)
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#cat",
            start: "top 0%",
            end: "top 0%",
            scrub: true,
        }
    })
    if (screen.width < 1150 && screen.width > 590) {
        tl.to('#principal', {
            y: "35%",
            duration: 0.13
        })
    } else if (screen.width < 590){
        tl.to('#principal', {
            y: "25%",
            duration: 0.13
        })
    } else {
        tl.to('#principal', {
            x: "-37%",
            duration: 0.13
        })
    }
    tl.to('#letras', {
        opacity: 0,
        rotation: -10,
        duration: 0.05
    })
    tl.to('#scroll-the-page', {
        opacity: 0,
        duration: 0.05
    })
    tl.to('#scroll-the-page-arrow', {
        opacity: 0,
        duration: 0.05
    })

    //ANIMAÇÃO 2 (gato aproxima)
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#cat",
            start: "100% 0%",
            end: "800% 0%",
            scrub: true,
        }
    })
    tl2.to('#cat', {
        scale: 20,
    })

    //ANIMAÇÃO 3 (transição para o sobremim1)
    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "2600px 0%",
            end: "2600px 0%",
            scrub: true,
        }
    })
    tl3.to('body', {
        backgroundColor: "#000"
    })

    //ANIMAÇÃO 4 (aparição do sobremim1)
    let tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "2800px 0%",
            end: "2800px 0%",
            scrub: true,
        }
    })
    tl4.to('#inicio', {
        display: 'none'
    })
    tl4.to('#sobre-mim-1', {
        display: 'flex'
    })

    //ANIMAÇÃO 5 (msg1 appears)
    let tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "3800px 0%",
            end: "3800px 0%",
            scrub: true,
        }
    })
    tl5.to('#msg1', {
        color: 'aliceblue'
    })

    //ANIMAÇÃO 6 (msg1 move)
    let tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "4800px 0%",
            end: "4800px 0%",
            scrub: true,
        }
    })
    tl6.to('#msg1', {
        scale: 1,
        top: 0,
        left: 0
    })

    //ANIMAÇÃO 7 (msg2 appears)
    let tl7 = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "5500px 0%",
            end: "5500px 0%",
            scrub: true,
        }
    })
    tl7.to('#msg2', {
        color: 'aliceblue'
    })

    //ANIMAÇÃO 8 (msg3 appears)
    let tl8 = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "6500px 0%",
            end: "6500px 0%",
            scrub: true,
        }
    })
    tl8.to('#msg3', {
        color: 'aliceblue'
    })

    //ANIMAÇÃO 9 (msg4 appears)
    let tl9 = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "7500px 0%",
            end: "7500px 0%",
            scrub: true,
        }
    })
    tl9.to('#msg4', {
        color: 'aliceblue'
    })

    //ANIMAÇÃO 10 (msg5 appears)
    let tl10 = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "8500px 0%",
            end: "8500px 0%",
            scrub: true,
        }
    })
    tl10.to('#msg5', {
        color: 'aliceblue'
    })

    //ANIMAÇÃO 11 (msg6 appears)
    let tl11 = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "9500px 0%",
            end: "9500px 0%",
            scrub: true,
        }
    })
    tl11.to('#msg6', {
        color: 'aliceblue'
    })

    //ANIMAÇÃO 12 (desaparição sobremim1)
    let tl12 = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "10200px 0%",
            end: "10200px 0%",
            scrub: true,
        }
    })
    tl12.to('#msg1', {
        color: '#000'
    })
    tl12.to('#msg2', {
        color: '#000'
    })
    tl12.to('#msg3', {
        color: '#000'
    })
    tl12.to('#msg4', {
        color: '#000'
    })
    tl12.to('#msg5', {
        color: '#000'
    })
    tl12.to('#msg6', {
        color: '#000'
    })

    //ANIMAÇÃO 13 (desaparição sobremim1 - pt 2)
    let tl13 = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "10700px 0%",
            end: "10700px 0%",
            scrub: true,
        }
    })
    tl13.to('#sobre-mim-1', {
        display: 'none'
    })

    //ANIMAÇÃO 14 (aparição sobremim2)
    let tl14 = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "11000px 0%",
            end: "11000px 0%",
            scrub: true,
        }
    })
    tl14.to('#sobre-mim-2', {
        display: 'flex'
    })

    //ANIMAÇÃO 15 (gato desaproxima e texto anda)
    let tl15 = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "11300px 0%",
            end: "13000px 0%",
            scrub: true
        }
    })
    tl15.to('body', {
        backgroundColor: '#bedcfe',
        duration: 50
    })
    if (screen.width < 735) {
        tl15.to('#gato', {
            scale: 0.8,
            duration: 50
        })
    } else {
        tl15.to('#gato', {
            scale: 1,
            duration: 50
        })
    }

    //ANIMAÇÃO 16 (texto anda mais e desaparece)
    let tl16 = gsap.timeline({
        onUpdate: () => {
            document.body.style.transition = 'background-color 0.130s ease'
        },
        scrollTrigger: {
            trigger: "body",
            start: "15000px 0%",
            end: "15000px 0%",
            scrub: true,
        }
    })
    tl16.to('#dud', {
        x: '2500px',
        opacity: 0
    })

    //ANIMAÇÃO 17 (gato esquerda, sobremim esquerda)
    let tl17 = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "15800px 0%",
            end: "15800px 0%",
            scrub: true,
        }
    })
    tl17.to('#gato', {
        x: '-600%'
    })
    tl17.to('.animacao-lado', {
        x: '0%'
    })

    //ANIMAÇÃO 18 (projetos-1 display flex)
    let tl18 = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "17000px 0%",
            end: "17000px 0%",
            scrub: true,
        }
    })
    tl18.to('#projetos-1', {
        display: 'flex'
    })

    //ANIMAÇÃO 19 (sobremim esquerda, transicao projetos esquerda)
    let tl19 = gsap.timeline({
        onUpdate: () => {
            document.body.style.transition = 'background-color 1s ease'
        },
        scrollTrigger: {
            trigger: "body",
            start: "18000px 0%",
            end: "18000px 0%",
            scrub: true,
        }
    })
    tl19.to('.animacao-lado', {
        x: '-150%'
    })
    tl19.to('#projetos-1', {
        x: "0%"
    })
    tl19.to('body', {
        backgroundColor: '#8ccfcd',
    })

    //ANIMAÇÃO 20 (projeto-msg-1 appears) 
    let tl20 = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "19000px 0%",
            end: "19000px 0%",
            scrub: true,
        }
    })
    tl20.to('#projeto-msg-1', {
        opacity: 1
    })

    //ANIMAÇÃO 21 (projeto-msg-2 appears) 
    let tl21 = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "19700px 0%",
            end: "19700px 0%",
            scrub: true,
        }
    })
    tl21.to('#projeto-msg-2', {
        opacity: 1
    })

    //ANIMAÇÃO 22 (projeto-msg-3 appears)
    let tl22 = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "20400px 0%",
            end: "20400px 0%",
            scrub: true,
        }
    })
    tl22.to('.projeto-msg-3', {
        opacity: 1
    })

    //ANIMAÇÃO 23 (projeto-msgs ao centro)
    let tl23 = gsap.timeline({
        onUpdate: () => {
            if ('ontouchstart' in window) {}
            else {
                if (span1.innerHTML === 'Projetos?') {
                    span1.innerHTML = 'Projetos.'
                    span2.innerHTML = 'Projetos.'
                    span3.innerHTML = 'Projetos.'
                    center.style.transform = "skewY(0deg)"
                    span1.style.transform = "translate(-50%,-50%) skewX(0deg)"
                    span2.style.color = "#ffffffdc"
                    span2.style.left = "0"
                    span2.style.transform = "translate(-50%,-50%) skewX(0deg)"
                    span3.style.left = "0"
                    span3.style.transform = "translate(-50%,-50%) skewX(0deg)"
                } else {
                    span1.innerHTML = 'Projetos?'
                    span2.innerHTML = 'Projetos?'
                    span3.innerHTML = 'Projetos?'
                    center.style.transform = "skewY(15deg)"
                    span1.style.transform = 'translate(-60%,-50%) skewX(0deg)'
                    span2.style.color = "#dbdbdbdc"
                    span2.style.left = "-38px"
                    span2.style.transform = "translate(-50%,-50%) skewX(-60deg)"
                    span3.style.left = "-76px"
                    span3.style.transform = "translate(-40%,-50%) skewY(0deg)"
                }
            }
        },
        scrollTrigger: {
            trigger: "body",
            start: "21100px 0%",
            end: "21100px 0%",
            scrub: true,
        }
    })
    tl23.to('#projeto-msg-0', {
        x: '0%',
        y: '0%'
    })
    tl23.to('#projeto-msg-1', {
        x: '0%',
        y: '0%'
    })
    tl23.to('#projeto-msg-2', {
        x: '0%',
        y: '0%'
    })
    if (screen.width < 1000 && screen.width > 900) {
        tl23.to('.projeto-msg-3', {
            x: '55%',
            y: '0%'
        })
    } else if (screen.width < 900 && screen.width > 775) {
        tl23.to('.projeto-msg-3', {
            x: '45%',
            y: '0%'
        })
    } else if (screen.width < 775 && screen.width > 700) {
        tl23.to('.projeto-msg-3', {
            x: '25%',
            y: '0%'
        }) 
    } else if (screen.width < 700) {
        tl23.to('.projeto-msg-3', {
            x: '0%',
            y: '0%'
        })
    } else {
        tl23.to('.projeto-msg-3', {
            x: '65%',
            y: '0%'
        })
    }

    //ANIMAÇÃO 24 (Projetos-2 display flex)
    let tl24 = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "21300px 0%",
            end: "21300px 0%",
            scrub: true,
        }
    })
    tl24.to('#projetos-2', {
        display: "flex"
    })

    //ANIMAÇÃO 25 (Projetos-2 desce)
    let sabido = 1
    let tl25 = gsap.timeline({
        onUpdate: () => {
            if (sabido === 1) {
                sabido = 0
                document.body.style.backgroundColor = document.querySelector('[data-ordem="4"]').getAttribute("cor")
                let gay
                let gay2
                if (screen.width > 1027) {
                    gay = 'translateY(0px) scale(1)'
                    gay2 = 'translateY(0px) scale(1)'
                } else {
                    gay = 'translateY(168%) scale(1)'
                    gay2 = 'translateY(-418%) scale(1)'
                }
                setTimeout(() => {
                    infos.style.opacity = 1
                    infos.style.transform = gay
                }, 800);
                setTimeout(() => {
                    projetos.style.opacity = 1
                    projetos.style.transform = 'translateY(0px) scale(1)'
                }, 1100);
                setTimeout(() => {
                    tituloprojetos.style.opacity = 1
                    tituloprojetos.style.transform = gay2
                    document.body.style.transition = 'background-color 0.130s ease'
                }, 1400);
            } else {
                sabido = 1
                document.body.style.transition = 'background-color 1s ease'
                document.body.style.backgroundColor = "#8ccfcd"
                let gay
                let gay2
                if (screen.width > 1027) {
                    gay = 'translateY(25px) scale(0.8)'
                    gay2 = 'translateY(25px) scale(0.8)'
                } else {
                    gay = 'translateY(168%) scale(1)'
                    gay2 = 'translateY(-418%) scale(1)'
                }
                infos.style.opacity = 0
                infos.style.transform = gay
                projetos.style.opacity = 0
                projetos.style.transform = 'translateY(25px) scale(0.8)'
                tituloprojetos.style.opacity = 0
                tituloprojetos.style.transform = gay2
            }
        },
        scrollTrigger: {
            trigger: "body",
            start: "21800px 0%",
            end: "21800px 0%",
            scrub: true,
        }
    })
    tl25.to('body', {
        backgroundColor: document.querySelector('[data-ordem="4"]').getAttribute("cor")
    })
    tl25.to('#projetos-2', {
        y: '0%'
    })
    tl25.to('#projetos-1', {
        y: '150%'
    })

    //ANIMAÇÃO 26 (cai a aba de contato)
    let tl26 = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "25130px 0%",
            end: "25130px 0%",
            scrub: true,
            onEnter: () => {
                gsap.to('#contato', {
                    duration: .5,
                    ease: "bounce.out",
                    y: '0%',
                })
            },
            onEnterBack: () => {
                gsap.to('#contato', {
                    duration: .5,
                    ease: "power1.out",
                    y: '-100%',
                })
            }
        }
    })

    //ANIMAÇÃO 27 (msg 1 da bola)
    let tl27 = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "26000px 0%",
            end: "27100px 0%",
            toggleActions: 'play reverse play reverse',
        }
    })
    tl27.to('#msgs-bola', {
        opacity: 1
    })

    //ANIMAÇÃO 28 (troca msg da bola)
    let tl28 = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "28200px 0%",
            end: "28200px 0%",
            scrub: true,
            onEnter: () => {
                msgBola.innerHTML = 'Eae, gostou?'
            },
            onEnterBack: () => {
                msgBola.innerHTML = ':&#41;'
            }
        }
    })

    //ANIMAÇÃO 29 (msg 2 da bola)
    let tl29 = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "29300px 0%",
            end: "30400px 0%",
            toggleActions: 'play reverse play reverse',
        }
    })
    tl29.to('#msgs-bola', {
        opacity: 1
    })

    //ANIMAÇÃO 30 (bola segue mouse)
    let tl30 = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "32000px 0%",
            end: "32000px 0%",
            toggleActions: 'play none reverse none'
        }
    })
    tl30.to('#follow-cursor', {
        opacity: 0,
    })
    tl30.to('#contato-pt1', {
        delay: 0.4,
        display: 'block',
    })
    tl30.to('#follow-cursor-vdd', {
        delay: 0.1,
        opacity: 1,
    })

    //ANIMAÇÃO 31 (display contato-pt2)
    let tl31 = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "33000px 0%",
            end: "34600px 0%",
            toggleActions: 'none play none reverse',
        }
    })
    tl31.to('#contato-pt2', {
        display:'flex'
    })

    //ANIMAÇÃO 32 (tudo aparce contato-pt2)
    let tl32 = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "34800px 0%",
            end: "34800px 0%",
            scrub: true,
            onEnter: () => {
                if (screen.width > 662) {
                    gsap.to('.letras', {
                        y: 0,
                        stagger: 0.03,
                        duration: 0.8
                    })
                } else {
                    gsap.to('.letras', {
                        y: 0,
                        opacity: 1,
                        stagger: 0.03,
                        duration: 0.8
                    })
                }
            },
            onEnterBack: () => {
                if (screen.width > 662) {
                    gsap.to('.letras', {
                        y: '100px',
                        stagger: 0.03,
                        duration: 0.8
                    })
                } else {
                    gsap.to('.letras', {
                        y: '100px',
                        opacity: 0,
                        stagger: 0.03,
                        duration: 0.8
                    })
                }
            }
        }
    })
    tl32.to('#gato-contato', {
        y: 0,
    })
    tl32.to('#github-contato', {
        opacity: 1
    })
    tl32.to('#linkedin-contato', {
        opacity: 1
    })
    tl32.to('#copy-email', {
        opacity: 1
    })
})