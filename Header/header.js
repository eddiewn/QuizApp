class reUseHeaderTest extends HTMLElement{
    connectedCallback(){
        this.innerHTML=
        `
            <header>
                <div id="headerBackground">
                    <nav class="navButtons">
                        <a class="navButton" data-url="/index.html">Home</a>
                        <a class="navButton" data-url="/Help/help.html">Help</a>
                        <a class="navButton" data-url="/preCreateQuiz/preCreateQuiz.html">Create Quiz</a>
                        <a class="navButton" data-url="/Profile/profile.html">Profile</a>
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

    
