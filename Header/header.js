class reUseHeaderTest extends HTMLElement{
    connectedCallback(){
        this.innerHTML=
    `
        <header>
            <div id="headerBackground">
                <nav class="navButtons">
                    <a id="homeButton" href="/index.html">Home</a>
                    <a id="helpButton" href="/Help/help.html">Help</a>
                    <a id="createQuizButton" href="/CreateQuiz/createQuiz.html">Create Quiz</a>
                    <a id="profileButton" href="/Profile/profile.html">Profile</a>
                </nav>
            </div>
        </header>
    `;
    }
}    
    
customElements.define('re-use-header', reUseHeaderTest);

    
