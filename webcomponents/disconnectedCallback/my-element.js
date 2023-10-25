class MyCustomElements extends HTMLElement {
    constructor() {
        super()
        console.log('Hello ')
    }
    connectedCallback() {
        console.log('hello Dom');
    }
    disconnectedCallback() {
        console.log('Bye Dom');
    }
}

customElements.define('my-custom-elements', MyCustomElements)

document.querySelector('my-custom-elements').remove()