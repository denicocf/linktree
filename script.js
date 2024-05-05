function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    // if(html.classList.contains("light")) {
    //     html.classList.remove("light")
    // } else {
    //     html.classList.add("light")
    // }

    // image: select img-dark, if lightMode swapt to img-light
    // if lightMode, swap to img-dark

    const img = document.querySelector("#con-profile img")

    if(html.classList.contains("light")) {
        img.setAttribute("src", "./assets/avatar-light-mode.png")
    } else {
        img.setAttribute("src", "./assets/avatar-dark-mode.png")
    }

    // texto alt: selecionar alt img-dark e se estiver lightMode mudar para alt img-light
    // se estiver lightMode, manter a alt img-dark

    if(html.classList.contains("light")) {
        img.setAttribute("alt", "photo of Denis without glasses with beach landscape in the background")
    } else {
        img.setAttribute("alt", "photo of Denis with sunglasses inside a car going to the beach")
    }
}