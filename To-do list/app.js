// document.querySelector('.plus').onclick = function () {
//     document.querySelector('#tasks').innerHTML += `
//         <div class="task">
//                 ${document.querySelector('#newTask input').value}
//         </div>
//     `
// }

const todoInput = document.querySelector('.todoInput');
const todoButton = document.querySelector('.plus');
const todoTasks = document.querySelector('.tasks');

todoButton.addEventListener('click', addTask);
todoTasks.addEventListener('click', deleteTask);

function addTask(event){
    event.preventDefault();
    
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todoItem")
    todoDiv.appendChild(newTodo);
    //completed
    const checkButton = document.createElement('button');
    newTodo.classList.add("checkButton");
    checkButton.innerHTML='x';
    todoDiv.appendChild(checkButton);

    todoTasks.appendChild(todoDiv);
}

function deleteTask(event){
    const item = event.target;
    console.log(item.classList[0]);

    if(item.classList[0] === "todo"){
        item.remove();
    }
}

