// Obter a referência do formulário de inclusão de tarefas
const formAddTodo = document.querySelector(".form-add-todo ");
// Obter a referência da lista de tarefas
const todosContainer = document.querySelector(".todos-container");
// Obter a referência do formulário de busca de tarefas
const inputSearchTodo = document.querySelector(".form-search");

// Função para incluir as tarefas
const addTodo = (inputValue) => {
  // Condição para verificar se o campo do formulário foi preenchido
  if (inputValue.length) {
    // Inserir um elemento dentro da ul
    todosContainer.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
            <span>${inputValue}</span>
            <i class="far fa-trash-alt delete" data-trash="${inputValue}"></i>
        </li>
        `;
    event.target.reset(); // Limpar o formulário
  }
};

// "Escutador" do eventos quando o formulário de inclusão de tarefas for enviado
formAddTodo.addEventListener("submit", (event) => {
  // Impedir o carregamento do formulário
  event.preventDefault();
  // Valor do input no momento do envio do formulário
  const inputValue = event.target.add.value.trim();
  addTodo(inputValue);
});

// Função para remover as tarefas
const removeTodo = (clickedElement) => {
  const trashDataValue = clickedElement.dataset.trash;
  const todo = document.querySelector(`[data-todo="${trashDataValue}"]`);
  if (trashDataValue) {
    todo.remove();
  }
};

// "Escutador" de eventos para eliminar as tarefas da lista
todosContainer.addEventListener("click", (event) => {
  const clickedElement = event.target;
  removeTodo(clickedElement);
});

const filterTodos = (todos, inputValue, returnMatchedTodo) => {
  return todos.filter((todo) => {
    const inputTodo = todo.textContent.toLowerCase().includes(inputValue);
    return returnMatchedTodo ? inputTodo : !inputTodo;
  });
};

const manipulateClasses = (todos, classToAdd, classToRemove) => {
  todos.forEach((todo) => {
    todo.classList.remove(classToRemove);
    todo.classList.add(classToAdd);
  });
};

const hideTodos = (todos, inputValue) => {
  const todosToHide = filterTodos(todos, inputValue, false);
  manipulateClasses(todosToHide, 'hidden', 'd-flex')
};

const showTodos = (todos, inputValue) => {
  const todosToShow = filterTodos(todos, inputValue, true)
  manipulateClasses(todosToShow, 'd-flex', 'hidden')
};

// "Escutador" de eventos para pesquisar na lista de tarefas
inputSearchTodo.addEventListener("input", (event) => {
  const inputValue = event.target.value.trim().toLowerCase();
  const todos = Array.from(todosContainer.children);
  hideTodos(todos, inputValue);
  showTodos(todos, inputValue);
});
