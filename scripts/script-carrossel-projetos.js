const projeto = document.querySelectorAll('.projeto')

function girarCarrossel(lado) {
    let ladoConfig = {
        ordemPrimeira: "7",
        ordemSegunda: "1"
    }
    if(lado) {
        ladoConfig.ordemPrimeira = "1"
        ladoConfig.ordemSegunda = "7"
    }
    projeto.forEach((projeto) => {
        if (projeto.getAttribute("data-ordem") === ladoConfig.ordemPrimeira) {
            projeto.setAttribute("data-ordem", ladoConfig.ordemSegunda)
        } else {
            const ordem = parseInt(projeto.getAttribute("data-ordem"))
            const dataN = lado? ordem - 1 : ordem + 1
            const data = dataN.toString()
            projeto.setAttribute("data-ordem", data)
        }
        if (projeto.getAttribute("data-ordem") === "4") {
            document.body.style.backgroundColor = projeto.getAttribute("cor")
        }
    })
    if ('ontouchstart' in window) {
        if (screen.width < 1027) {
            projeto.forEach((projeto) => {
                if (projeto.getAttribute("data-ordem") === "3" || projeto.getAttribute("data-ordem") === "5") {
                    projeto.style.display = 'none'
                }
                if (projeto.getAttribute("data-ordem") === "4") {
                    projeto.style.display = 'flex'
                }
            })
        }
    }
}
if ('ontouchstart' in window) {
    if (screen.width < 1027) {
        projeto.forEach((projeto) => {
            if (projeto.getAttribute("data-ordem") === "3" || projeto.getAttribute("data-ordem") === "5") {
                projeto.style.display = 'none'
            }
        })
    }
}