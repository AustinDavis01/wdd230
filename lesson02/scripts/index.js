
function year() {
    const date = document.getElementById("date")

    let currentYear = new Date().getFullYear()
    date.innerText = `@${currentYear}`
}

function lastModifiedDate() {
    //  grab modidfied element
    const lastMod = document.getElementById("lastmod")

    // the best
    let mod = new Date(document.lastModified)

    lastMod.innerText = mod
}

lastModifiedDate()
year()