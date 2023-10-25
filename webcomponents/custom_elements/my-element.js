const template = document.createElement('div')
template.innerHTML = `
    <style>
        .text-2 {
            font-weight: 900;
            font-family: Arial;
            font-size: 4rem;
        }
        p {
            color: blue;
        }
    </style>
    <p>Hello of template</p>
    <p class="text-2">Example 2</p>
`

class myElement extends HTMLElement {
    constructor() {
        super()
        this.p = document.createElement('p')
    }
    connectedCallback() {
        this.p.textContent = 'Hello, world, of callback'
        this.appendChild(this.p)
        this.appendChild(template)
    }
}

customElements.define('my-element', myElement)