
class App extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    // TODO: get the template that we will use for the component (it's inside the index.html)
    let template = document.getElementById("app-root-template");
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.ul = this.shadowRoot.querySelector("#user-list");
    let btn = this.shadowRoot.querySelector("#save-btn");
    btn.addEventListener('click', this.createUser());
    this.loadUsers();
    console.log('App created!');
  }

  loadUsers() {
    // TODO: Implement loading the user list from the api (use fetch)
    // This method should render li elements containing the email of the user inside #user-list
    // in the template of the component
    fetch('http://localhost:8080/api/user', { 
      method: "GET"
    })
    .then(res => res.json())
    .then(data => {
      data.forEach(user => {
        let liEl = document.createElement('li');
        liEl.innerText = user.email;
        this.ul?.appendChild(liEl);
      })
      
    });
  }

  createUser() {
    // TODO: Implement creating a new user using the functions provided bellow (use fetch)
    // make sure that you delete all the input values after the user is successfully created
    let data = {};
    const values = this.getInputValues();
    values.forEach(dataValue => {
      data[dataValue.name] = dataValue.value;
    })

    fetch('http://localhost:8080/api/user', {
       method: "POST", 
       body: JSON.stringify(data) 
    })
    .then(res => res.json()).then(data => {
      console.log(data);
      this.clearInputValues();
    });
  }

  getInputs() {
    return Array.from(
      this.shadowRoot.querySelectorAll('#create-user input[name]')
    );
  }

  getInputValues() {
    const inputs = this.getInputs();
    return inputs.map(input => ({ value: input.value, name: input.name }));
  }

  clearInputValues() {
    const inputs = this.getInputs();
    inputs.forEach(input => input.value = '');
  }
}
customElements.define('app-root', App);