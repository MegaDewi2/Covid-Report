class FaqItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set faq(faq) {
        this._faq = faq;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
           <style>
                faq-item {
                    display: block;
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                }
                
                .faq-info {
                    padding: 24px;
                }
                
                .faq-info > h2 {
                    font-weight: lighter;
                    color: #eee;
                }
                
                .faq-info > p {
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    color: #eee;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10; /* number of lines to show */
                }
           </style>
           <div class="faq-info">
               <h2>${this._faq.ask}</h2>
               <p>${this._faq.answer}</p>
           </div>`;
    }
}

customElements.define("faq-item", FaqItem);