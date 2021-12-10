class Content extends HTMLElement{

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
            h1, p{
                font-family: 'Times New Roman', Times, serif;
                color: #eee;
            }
            p{
                font-size: 18px;
            }
            a{
                color: #eee;
                text-decoration: none;
            }
            
            a:hover{
                color: #548CA8;
            }
            .container {
                display: flex;
                height: 350px;
                padding: 20px;
                border-radius: 10px;
                margin: 0 auto;
            }
            .header {
                flex-grow: 1;
                margin: 5px;
                border-radius: 10px;
            }
        </style>
        <div class="container">
            <div class="header">
                <div>
                    <h1>Coronavirus Deases (Covid-19)</h1>
                </div>
                <div>
                    <p>
                        COVID-19 is the disease caused by a new coronavirus called SARS-CoV-2. WHO first learned of this new virus on 31 December 2019, following a report of a cluster of cases of 'viral pneumonia' in Wuhan, People's Republic of China.
                    </p>
                    <a href="https://www.who.int/">(World Health Organization)</a>
                </div>
            </div>
            <div class="header"> 
                <img src="./img/test-results.png" height="350px">
            </div>
        </div>
        `;
    }
}

customElements.define('main-content',Content);