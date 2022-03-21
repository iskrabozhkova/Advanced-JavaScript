import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators";
import { IUser } from "./interfaces/user";


@customElement('user-lit')
export class UserComponent extends LitElement{
    @property()
    user!: IUser;

    render() {
       html`div class="user-card" @click=${this.handleClick}>
                <label>User id: ${this.user.id}</label>
                <label>Name: ${this.user.name}</label>
                <label>Email: ${this.user.email}</label>
                <label>Company name: ${this.user.company.name}</label>
            </div>`
    }
    function handleClick()
}