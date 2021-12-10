class NavBar extends HTMLElement{

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
            ul{
                list-style: none;
            }
            
            a{
                color: #eee;
                text-decoration: none;
            }
            
            a:hover{
                color: #548CA8;
            }
            nav {
                display: block;
                justify-content: space-between;
                align-items:center;
                height:60px;
                padding:0px; 
                margin-left: 1000px;
            }         
        </style>
        <nav class="navbar">
            <ul>
                <li><a href="#faq-list">FAQ</a></li>
            </ul>
        </nav>
        `;
    }
}

customElements.define('nav-bar',NavBar);