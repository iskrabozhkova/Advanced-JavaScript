import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js'
import {IUser} from './interfaces/user'
import "./user"

@customElement('user-list')
export class UserListComponent extends LitElement{
    constructor(){
        super();
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
            this.users = data;
        })
    }
    @property()
    users: IUser[] = [];

    
    render(){
        return html`
        <div style="width: 60%">
        ${this.users.map((user) => {
            return html`<user-lit .user=${user}></user-lit>`
        })}
        </div>
        `
    }
}