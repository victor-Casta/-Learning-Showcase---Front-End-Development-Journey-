class myElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }
    static get observedAttributes() {
        return ['title', 'text', 'img']
    }
    attributeChangedCallback(actualVal, oldVal, newVal) {
        if(actualVal === 'title') {
            this.title = newVal
        }
        if(actualVal === 'text') {
            this.text = newVal
        }
        if(actualVal === 'img') {
            this.img = newVal
        }
    }
    getTemplate() {
        const template = document.createElement('template')
        template.innerHTML = `
            <section>
                <h2>${this.title}</h2>
                <div>
                    <p>${this.text}</p>
                    <img src="${this.img}"/>
                </div>
            </section>
            ${this.getStyles()}
        `
        return template
    }
    getStyles() {
        return `
            <style>
                h2 {
                    color: green;
                }
            </style>
        `
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render()
    }
}

customElements.define('my-element', myElement)