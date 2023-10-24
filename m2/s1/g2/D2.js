const header= document.getElementById("main-header")

const toggleHeader= () => {
    if (window.scroll > 0) {
        header.classList.add("sticky-header");
    } else { header.classList.remove("sticky-header");
}

}

window.addEventListener("scroll", toggleHeader);


