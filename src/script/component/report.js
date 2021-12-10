class Report extends HTMLElement{

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    // connectedCallback(){
    //     this.render();
    // }
    set dataShow(data){
        this._datashow = data;
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
            .container-2 {
                display: flex;
                width: 700px;
                height: 160px;  
                border-radius: 10px;
                margin: 0 auto;
            }
            .report {
                flex-grow: 1;
                background-color: #eee;
                margin: 15px;
                border-radius: 10px;
                text-align: center;
                color: #548CA8; 
                font-size: 20px;
            }
        </style>
        <div class="container-2">
            <div class="report">
                <h3> Active Cases </h3>
                <p>${this._datashow.confirmed.value}</p>
            </div>
            <div class="report">
                <h3> Death Cases </h3>
                <p>${this._datashow.deaths.value}</p>
            </div>
            <div class="report">
                <h3> Recovery </h3>
                <p>${this._datashow.recovered.value}</p>
            </div>
        </div>`;
    }
}

customElements.define('report-content',Report);