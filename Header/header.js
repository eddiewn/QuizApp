class reUseHeaderTest extends HTMLElement{
    connectedCallback(){
        this.innerHTML=
        `
            <header id="header">
                <div id="headerBackground">
                    <nav class="navButtons">
                        <a class="navButton" id="homeButton" data-url="/index.html">Home</a>
                        <div id="rightButtons">
                        <a class="navButton" data-url="/Help/help.html">Help</a>
                        <a class="navButton" data-url="/preCreateQuiz/preCreateQuiz.html">Create Quiz</a>
                        <a class="navButton" data-url="/Profile/profile.html">Profile</a>
                        <a class="navButton github-button"  href="https://github.com/eddiewn" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" aria-label="Follow @eddiewn on GitHub">My Github</a>
                        <div>
                    </nav>
                </div>
            </header>
        `;

        const navButtons = this.querySelectorAll(".navButton");
        navButtons.forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                const targetUrl = btn.dataset.url;
                deloadAnimation(targetUrl);
            });
        });
    }
}    


customElements.define('re-use-header', reUseHeaderTest);

    
