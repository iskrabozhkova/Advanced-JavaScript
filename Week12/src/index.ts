import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import './user-list'
import './user';
import {IUser} from './interfaces/user'
import './user-details'

// @customElement('simple-greeting')
// export class SimpleGreeting extends LitElement{
//     static styles = css`
//     :host{
//         color: blue;
//     }
//     `;
//     @property()
//     name?: string = 'World'

//     render(){
//         return html`<p>Hello, ${this.name}!</p><simple-greeting2></simple-greeting2>`
//     }
// }



@customElement('app-lit')
export class AppComponent extends LitElement{
     styles = `css
        .wrapper{
            display: flex;
        }
    `
    @property()
    selectedUser : IUser | null = null;
    headerTemplate(){
        return html`<header>Header</header>`
    }
    mainTemplate(){
        return html`
        <div class="wrapper">
            <user-list @selectUser=${(event: CustomEvent) => {this.selectedUser = event.detail}}></user-list>
            <user-details .user=${this.selectedUser}></user-details>
        </div>
        `
    }
    footerTemplate(){
        return html`<footer>Footer</footer>`
    }
    render(){
        return html`
        ${this.headerTemplate()}
        ${this.mainTemplate()}
        ${this.footerTemplate()}
        `
    }
}

const appComponent = new AppComponent();
document.body.appendChild(appComponent);