import {LitElement, css,html} from 'lit';
import {customElement, property} from 'lit/decorators'
import {IUser} from './interfaces/user'

@customElement('app-lit')
export class AppComponent extends LitElement{
    headerTemplate(){
        return html`<header>Title</header>`
    }
    render(){
        return html`
        ${this.headerTemplate}
        `
    }
}


const appComponent = new AppComponent();
document.body.appendChild(appComponent);