import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js'
import {IUser} from './interfaces/user'

@customElement('user-details')
export class UserDetails extends LitElement{
    static styles = css`
    :host{
        color: blue;
    }
    `
    @property()
    user?: IUser;
    
    render(){
        if(this.user){
            return html`
            <div>
                <label>User id: ${this.user.id}</label>
                <label>Name: ${this.user.name}</label>
                <label>Email: ${this.user.email}</label>
                <label>Company name: ${this.user.company.name}</label>
            </div>
        `
        }else{
            return html`No selected user!` 
        }
    }
}
