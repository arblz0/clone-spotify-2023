const topBar = document.querySelector('.topbar')

// Cambiar opacidad con Scroll
window.addEventListener("scroll", () => {
    if(window.scrollY > 0){
        topBar.classList.add("transparent")
    }
    else{
        topBar.classList.remove("transparent")
    }
})

// Nueva variable para almacenar altura del Topbar
let topbarHeight = topBar.offsetHeight
// Añadimos un paddingTop basado en la altura al main-content o el contenido principal
const mainContent = document.querySelector(".main-content")
mainContent.computedStyleMap.paddingTop = `${topbarHeight + 20}px`

// boton play
const containerConcentracion = document.querySelectorAll(".card-concentracion")
const containerSpotifyPlaylists = document.querySelectorAll(".card-spotify-playlists")

// Funcion que se va a repetir
const createButton = card => {
    const button = document.createElement("button")
    button.innerHTML = '<i class="fa-solid fa-play"></i>'

    card.appendChild(button)

    button.style.display = "none"
    button.classList.add("btn-play")

    card.addEventListener("mouseover", () => {
        button.style.display = 'block'
    });

    card.addEventListener('mouseout', () => {
        button.style.display = 'none'
    });
};

containerConcentracion.forEach(card => {
    createButton(card)
});

containerSpotifyPlaylists.forEach(card => {
    createButton(card)
});