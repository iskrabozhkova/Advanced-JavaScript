(() => {
  
    const root = document.getElementById('root');
    const loginFormTemplate = document.getElementById('login-form-template');
    const loggedContentTemplate = document.getElementById('logged-content-template');
  
    const parseResponse = res => res.headers.get('content-type').includes('application/json') ?
        res.json() :
        res.text();

    function parseLoginForm(acc, currElement){
        if(currElement instanceof HTMLInputElement){
            acc[currElement.name] = currElement.value;
        }
        return acc;
    }
    function loginFormSubmit(event){
        event.preventDefault();
        const {target} = event;
        const wrongCredentials = target.querySelector('#wrong-credentials')
        const data = Array.from(target.querySelectorAll('*[name]')).reduce(parseLoginForm, {});
        const body = JSON.stringify(data);

        fetch('./login', {method: 'POST', 
                          body, 
                          headers: {
                              'content-type': 'application/json',
                              'content-length': body.length
        }}).then(parseResponse)
            .then(({user}) => {
                if(!user){
                    wrongCredentials.classList.remove('hidden');
                    return;
                }
                const {content} = loggedContentTemplate.cloneNode(true);
                root.firstElementChild.remove();
                root.appendChild(content);
            })
    }
    function app(user) {
        if (!user){
            const {content} = loginFormTemplate.cloneNode(true);
            root.appendChild(content);

            const loginForm = root.querySelector('#login-form');
            loginForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const {target} = event;
                const data = Array.from(target.querySelectorAll('*[name]')).reduce(parseLoginForm, {});
            })
        }
    }
    fetch('/authenticate')
            .then(parseResponse)
            .then(data =>
              typeof data !== 'string' && 'user' in data ?
                data.user :
                Promise.reject('Invalid response')
            )
            .then(app)
            .catch(console.error);
})();  