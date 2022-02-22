export const createAuthModal = () => {
  const authModalWindow = document.createElement('div');
  authModalWindow.className = 'modal';
  authModalWindow.innerHTML = `
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Авторизация </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" 
          aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form id="form-auth">
        <div class="mb-3">
          <label for="userName" class="form-label">Введите Ваше имя</label>
          <input type="text" class="form-control" id="userName" 
            aria-describedby="userName" required>
        </div>
        <button type="submit" class="btn btn-primary">Войти</button>
      </form>
      </div>
      </div>
  </div>
  `;
  authModalWindow.style.display = 'block';

  return authModalWindow;
};

const createAppContainer = () => {
  // получаем контейнер приложения
  const appContainer = document.querySelector('.app-container');
  appContainer.className = 'vh-100 w-100 d-flex align-items-center';
  appContainer.classList.add('justify-content-center');
  appContainer.classList.add('flex-column');
  const appTitle = document.createElement('h3');
  appTitle.textContent = 'Todo App';
  appContainer.append(appTitle);

  return appContainer;
};

const createFormAddTodo = () => {
  const form = document.createElement('form');
  form.className = 'd-flex align-items-center mb-3';

  const label = document.createElement('label');
  label.className = 'form-group me-3 mb-0';

  const input = document.createElement('input');
  input.className = 'form-control';
  input.name = 'newitem';
  input.type = 'text';
  input.placeholder = 'ввести задачу';
  label.append(input);

  const buttonSubmit = document.createElement('button');
  buttonSubmit.className = 'btn btn-primary me-3 disabled';
  buttonSubmit.type = 'submit';
  buttonSubmit.textContent = 'Сохранить';

  const buttonReset = document.createElement('button');
  buttonReset.className = 'btn btn-warning';
  buttonReset.type = 'reset';
  buttonReset.textContent = 'Очистить';

  form.append(label, buttonSubmit, buttonReset);

  return { form, input, buttonSubmit };
};


const createTodoList = () => {
  const table = document.createElement('table');
  table.className = 'table table-hover table-bordered';

  const tableHead = document.createElement('tr');
  tableHead.innerHTML = `
  <tr class="row">
    <th scope="col">№</th>
    <th scope="col">Задача</th>
    <th scope="col">Статус</th>
    <th scope="col">Действия</th>
  </tr>
  `;
  table.append(tableHead);

  const tbody = document.createElement('tbody');
  table.append(tbody);
  return { table, tbody };
};

export const createApp = () => {
  const appContainer = createAppContainer();

  const formAddTodo = createFormAddTodo();
  appContainer.append(formAddTodo.form);

  const tableWrapper = document.createElement('div');
  tableWrapper.className = 'table-wrapper';
  appContainer.append(tableWrapper);

  const { table, tbody } = createTodoList();
  tableWrapper.append(table);

  return { formAddTodo, tbody };
};
