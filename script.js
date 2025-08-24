    let growRadius = 0;
    const circle = document.querySelector(".spotlight");

    function loadAnimation(){
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
    const circle = document.createElement("div");
        circle.classList.add("spotlight");
        document.body.appendChild(circle);
        circle.style.setProperty("--r", 1000 + "px");

        shrinkRadius = shrinkRadius - 40;
        circle.style.setProperty("--r", shrinkRadius + "px");

        if (shrinkRadius > 0) {
            requestAnimationFrame(() => deloadAnimation(nextUrl)); 
        }else{
            window.location.href=nextUrl
        }
    }

document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("headerBackground");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
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