class reUseHeaderTest extends HTMLElement{
    connectedCallback(){
        this.innerHTML=
    `
        <header>
            <div id="headerBackground">
                <nav class="navButtons">
                    <h2 id="homeButton"><a href="/index.html">Home<a/></h2>
                    <h2 id="helpButton">Help</h2>
                    <h2 id="createQuizButton"><a href="/CreateQuiz/createQuiz.html">Create Quiz</a></h2>
                    <h2 id="profileButton">Profile</h2>
                </nav>
            </div>
        </header>
    `;
    }
}    
    
customElements.define('re-use-header', reUseHeaderTest);

    
