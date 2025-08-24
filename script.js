    let growRadius = 0;
    let shrinkRadius = 1000;
    let rafId = null;

    function ensureSpotlight() {
    let circle = document.querySelector(".spotlight");
    if (!circle) {
        circle = document.createElement("div");
        circle.classList.add("spotlight");
        mainTag.appendChild(circle);
    }
    return circle;
    }

    function loadAnimation() {
    const circle = ensureSpotlight();
    circle.style.setProperty("--r", `${growRadius}px`);
    growRadius += 50;

    if (growRadius < 1000) {
        rafId = requestAnimationFrame(loadAnimation);
    } else {
        circle.remove();
        rafId = null;
    }
    }

    function deloadAnimation(nextUrl) {
    const circle = ensureSpotlight();

    if (shrinkRadius === 1000) {
        circle.style.setProperty("--r", "1000px");
    }

    shrinkRadius -= 40;
    circle.style.setProperty("--r", `${shrinkRadius}px`);

    if (shrinkRadius > 0) {
        rafId = requestAnimationFrame(() => deloadAnimation(nextUrl));
    } else {
        window.location.href = nextUrl;
    }
    }

    window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
        if (rafId) cancelAnimationFrame(rafId);
        growRadius = 0;
        shrinkRadius = 1000;
        const circle = ensureSpotlight();
        circle.style.setProperty("--r", "0px");
    }
    });

    window.addEventListener("pagehide", () => {
    if (rafId) cancelAnimationFrame(rafId);
    growRadius = 0;
    shrinkRadius = 1000;
    });

    document.addEventListener("DOMContentLoaded", () => {
    loadAnimation();

    const header = document.getElementById("headerBackground");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
        header.classList.add("scrolled");
        setTimeout(() => header.classList.add("wait"), 50);
        } else {
        header.classList.remove("scrolled");
        setTimeout(() => header.classList.remove("wait"), 50);
        }
    });
    });