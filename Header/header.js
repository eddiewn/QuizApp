class reUseHeaderTest extends HTMLElement{
    connectedCallback(){
        this.innerHTML=
        `
            <header>
                <div id="headerBackground">
                    <nav class="navButtons">
                        <a class="navButton" id="homeButton" href="/index.html">Home</a>
                        <a class="navButton" id="helpButton" href="/Help/help.html">Help</a>
                        <a class="navButton" id="createQuizButton" href="/preCreateQuiz/preCreateQuiz.html">Create Quiz</a>
                        <a class="navButton" id="profileButton" href="/Profile/profile.html">Profile</a>
                    </nav>
                </div>
            </header>
        `;
    }
}    
    


customElements.define('re-use-header', reUseHeaderTest);

    
