import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js'
import {IUser} from './interfaces/user'

@customElement('user-lit')
export class UserComponent extends LitElement{
    constructor(){
        super();
        
    }
   static styles = css`
   .user-card{
        border: 1px solid black;
        padding: 1rem;
        display: flex;
        flex-decoration: column;
        width: 100%;
        margin-bottom: 1rem;
     }
     .user-card:hover{
         cursor: pointer;
         background-color: #ccc;
     }
     label{
         cursor: pointer;
     }`;
     
    @property()
    user!: IUser;
    //  userId?: number = 0;
    //  @property()
    //  name?: string;
    //  @property()
    //  email?: string;
    //  @property()
    //  companyName?: string;

    
    render(){
        return html`
            <div class="user-card" @click=${this.handleClick}>
                <label>User id: ${this.user.id}</label>
                <label>Name: ${this.user.name}</label>
                <label>Email: ${this.user.email}</label>
                <label>Company name: ${this.user.company.name}</label>
            </div>
        `
    }
    handleClick = () => {
        console.log(this.id);
        const event = new CustomEvent('selectUser', { bubbles: true, composed: true, detail: this.user});
        this.dispatchEvent(event);
    }
}
