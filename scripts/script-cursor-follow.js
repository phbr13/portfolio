document.addEventListener('DOMContentLoaded', () => {
    let xTo = gsap.quickTo(".follow-cursor", "x", { duration: 0.3, ease: "power3" }),
        yTo = gsap.quickTo(".follow-cursor", "y", { duration: 0.3, ease: "power3" }),
        xToAlert = gsap.quickTo("#alert", "x", { duration: 0.3, ease: "power3" }),
        yToAlert = gsap.quickTo("#alert", "y", { duration: 0.3, ease: "power3" }),
        outsideButton = true
    const pos = { x: 0, y: 0 };
    const vel = { x: 0, y: 0 };
   
    function getScale(diffX, diffY) {
        const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
        return Math.min(distance / 500, 0.25);
    }        
    function getAngle(diffX, diffY) {
        return (Math.atan2(diffY, diffX) * 180) / Math.PI;
    }

    document.querySelector("#contato").addEventListener("mousemove", (e) => {
        xTo(e.clientX + -10);
        yTo(e.clientY + -10);
        xToAlert(e.clientX + 40)
        yToAlert(e.clientY + -35)

        const x = e.clientX;
        const y = e.clientY;
        gsap.to(pos, {
            x: x,
            y: y,
            ease: "expo.out",
            duration: 1,
            onUpdate: () => {
            vel.x = x - pos.x;
            vel.y = y - pos.y;
            }
        });

        loop()
    });

    const loop = () => {
        for (let index = 0; index < 5; index++) {
            const shape = document.querySelector(".follow-cursor");

            let rotation = getAngle(vel.x, vel.y);
            let scale = getScale(vel.x, vel.y);
            let scaleX = scale
            let scaleY = -scale
            if(!outsideButton) {
                scaleX = 2.5,
                scaleY = 2.5
            }
            gsap.to(shape, {
                rotation: rotation + "_short",
                scaleX: 1 + scaleX,
                scaleY: 1 + scaleY
            });
        }
    }

    if ('ontouchstart' in window) {
        document.getElementById('follow-cursor-vdd').style.display = 'none'
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
        const links = document.querySelectorAll('.link')
        links.forEach(function(link) {
            let content = link.innerHTML
            link.addEventListener('mouseenter', function() {
                link.innerHTML = '<p>Clique!</p>'
                outsideButton = false
            });
            link.addEventListener('mouseleave', function() {
                link.innerHTML = content
                outsideButton = true
            });
        });
    }
})

function irPara(link) {
    const alertt = document.getElementById("alert")
    if (link === 1) {
        window.open('https://github.com/phbr13', '_blank')
    } else if (link === 2) {
        window.open("https://br.linkedin.com/?trk=guest_homepage-basic_nav-header-logo", '_blank')
    } else if (link === 3) {
        navigator.clipboard.writeText('phborges2006@gmail.com')
        gsap.to(alertt, {
            opacity: 1,
            scale: 1
        })
        gsap.to(alertt, {
            opacity: 0,
            scale: 0.8,
            delay: 1.3
        })
    }
}