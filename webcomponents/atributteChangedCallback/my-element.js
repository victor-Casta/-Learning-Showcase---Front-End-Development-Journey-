class myElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.title = this.getAttribute('title')
        this.text = this.getAttribute('text')
        this.img = this.getAttribute('img')
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