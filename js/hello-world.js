// Custom element #2: <hello-world>
// Logs a message to the browser console when placed on the page.
// It does not change the DOM.
class HelloWorld extends HTMLElement {
  connectedCallback() {
    console.log("Hello World!");
  }
}

customElements.define("hello-world", HelloWorld);
