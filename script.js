let growRadius = 0;

window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
        const circle = document.createElement("div");

        growRadius = 0;
        shrinkRadius = 1000;
        circle.style.setProperty("--r", "0px");

        if (!document.querySelector(".spotlight")) {
            const circle = document.createElement("div");
            circle.classList.add("spotlight");
            circle.style.setProperty("--r", "0px");
            mainTag.appendChild(circle);
        }
    }
});

    function loadAnimation(){
        const circle = ensureSpotlight();
        growRadius = growRadius + 50;
        circle.style.setProperty("--r", growRadius + "px");

        if (growRadius < 1000) {
            requestAnimationFrame(loadAnimation);
        }else{
            circle.remove();
        }
    }

    let shrinkRadius = 1000;
    function deloadAnimation(nextUrl){
    const circle = ensureSpotlight();
        mainTag.appendChild(circle);
        circle.style.setProperty("--r", 1000 + "px");

        shrinkRadius = shrinkRadius - 40;
        circle.style.setProperty("--r", shrinkRadius + "px");

        if (shrinkRadius > 0) {
            requestAnimationFrame(() => deloadAnimation(nextUrl)); 
        }else{
            window.location.href=nextUrl
        }
    }

    window.addEventListener("beforeunload", () => {
        growRadius = 0;
        shrinkRadius = 1000;
    });

document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("headerBackground");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
        header.classList.add("scrolled");
        setTimeout(() => {
            header.classList.add("wait");
        },50);

        } else {
        header.classList.remove("scrolled");
        setTimeout(() => {
            header.classList.remove("wait");
        },50);

        }
    });
});

function ensureSpotlight() {
    let circle = document.querySelector(".spotlight");
    if (!circle) {
        circle = document.createElement("div");
        circle.classList.add("spotlight");
        mainTag.appendChild(circle);
    }
    return circle;
}



