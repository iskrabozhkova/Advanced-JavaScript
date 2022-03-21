"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
const create_template_1 = require("./create-template");
const appComponentTemplate = (0, create_template_1.createTemplate)(`
    <div id="text">Hello world!</div>
`);
class AppComponent extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(appComponentTemplate.content.cloneNode(true));
    }
}
exports.AppComponent = AppComponent;
