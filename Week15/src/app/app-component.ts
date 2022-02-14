import  {createTemplate} from './create-template'

const appComponentTemplate = createTemplate(`
    <div id="text">Hello world!</div>
    <ul id="users"></ul>
`)

export class AppComponent extends HTMLElement{
    constructor(injector: any){
        super();
        const userService = injector.get('userService');
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(appComponentTemplate.content.cloneNode(true));
        const ul = shadowRoot.querySelector('#user-list')

        userService.getUsers().then(users => {
            document.createElement()
        })
    }
}

customElements.define('app-root', AppComponent);