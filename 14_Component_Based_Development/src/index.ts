import './app/app-component'
import { AppComponent } from './app/app-component'

const userService = {
    getUsers(){
        return fetch('/api/users').then(res => res.json())
    }
}

const mainInjector = {
    instances: {
        userService
    },
    get(name:string){
        return (this.instances as any)[name];
    }
}
const appRoot = new AppComponent(mainInjector);
document.getElementById('app-root')?.appendChild(appRoot);

