import './faq-item.js';

class FaqList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set faqs(faqs) {
        this._faqs = faqs;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._faqs.forEach(faq => {
            const faqItemElement = document.createElement("faq-item");
            faqItemElement.faq = faq;
            this.shadowDOM.appendChild(faqItemElement);
        })
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>`;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("faq-list", FaqList);