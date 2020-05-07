///////////////////////////////////////////////////////////////////////
////////////////////        M o d e l       ///////////////////////////
///////////////////////////////////////////////////////////////////////

const Model = (() => {
  let todoId = 0;

  class Task {
    constructor(task) {
      this.id = todoId;
      todoId++;
      this.task = task;
    }

    updateTaskId(id) {
      this.id = id;
    }

    generateTemplate() {
      return `<div class="todoList-row" id="task${this.id}">
                <li class="todo-item">
                  <input type="text" class="todo-item-input" value="${this.task}" readonly>
                </li>
                <button id="edit${this.id}" class="btn btn-edit">Edit</button>
                <button id="task${this.id}" class="btn btn-remove">Done</button>
              </div>`;
    }

    generateEditableTemplate() {
      return `<div class="todoList-row" id="task${this.id}">
                <li class="todo-item">
                  <input type="text" class="todo-item-edit-input" value="${this.task}">
                </li>
                <button id="edit${this.id}" class="btn btn-save">Save</button>
                <button id="task${this.id}" class="btn btn-remove">Done</button>
              </div>`;
    }
  }
  function addTask(oldTodoList, newTodoItem) {
    return [...oldTodoList, newTodoItem];
  }

  function removeTask(id, oldTodoList) {
    console.log("Remove task");
    return oldTodoList.filter((task) => task.id != id);
  }

  function editTask(id, todoList, newTask) {
    console.log("Editing task");
    const editedList = todoList.map((task) => {
      if (task.id == id) {
        // task.task = task.task + "!!!";
        // element.target.parentElement.innerHTML = task.generateEditableTemplate();
        // console.log(task.generateEditableTemplate());
        task = newTask;
      }
      return task;
    });
    return editedList;
  }

  return { Task, addTask, removeTask, editTask };
})();

///////////////////////////////////////////////////////////////////////
/////////////////////        V i e w       ////////////////////////////
///////////////////////////////////////////////////////////////////////

const View = (() => {
  const viewString = {
    todo_input: ".todo-input",
    todo_list: ".todo-list",
    btn_remove: ".btn-remove",
    btn_save: ".btn-save",
    edit_input: ".todo-item-edit-input",
  };
  return { viewString };
})();

///////////////////////////////////////////////////////////////////////
//////////////////        A p p I n i t       /////////////////////////
///////////////////////////////////////////////////////////////////////

const AppInit = ((model, view) => {
  class State {
    constructor() {
      this.userItem = "";
      this.userItemsList = [];
    }

    set userInput_GetterSetter(newUserInput) {
      // console.log("get new item");
      this.userItem = newUserInput;
    }

    get userInput_GetterSetter() {
      // console.log("return new item");
      return this.userItem;
    }

    set userInputList_GetterSetter(newUserInputList) {
      // console.log("set new input list");
      this.userItemsList = newUserInputList;
      // update UI
      todoListItemRenderFunc();
    }
    get userInputList_GetterSetter() {
      // console.log("return new input list");
      return this.userItemsList;
    }
  }

  const state = new State();

  function todoItemInputFunc() {
    let inputEle = document.querySelector(view.viewString.todo_input);
    inputEle.addEventListener("keypress", (e) => {
      if (e.code === "Enter") {
        // model handle data action: add new todo
        let newTask = new model.Task(state.userInput_GetterSetter);
        state.userInputList_GetterSetter = model.addTask(
          state.userInputList_GetterSetter,
          newTask
        );
        inputEle.value = "";
      }
    });
  }

  function dataBinding() {
    let todoInputElement = document.querySelector(view.viewString.todo_input);
    todoInputElement.addEventListener("keyup", (e) => {
      state.userInput_GetterSetter = e.target.value;
    });
  }

  function dataBinding2() {
    let todoInputElement = document.querySelector(view.viewString.todo_input);
    todoInputElement.addEventListener("keyup", (e) => {
      state.userInput_GetterSetter = e.target.value;
    });
  }

  function todoListItemRenderFunc() {
    let todoInputList = document.querySelector(view.viewString.todo_list);
    let temp = state.userInputList_GetterSetter
      .map((task) => {
        return task.generateTemplate();
      })
      .join("");
    todoInputList.innerHTML = temp;
  }

  function todoListEditItemRenderFunc(id) {
    let todoInputList = document.querySelector(view.viewString.todo_list);
    let temp = state.userInputList_GetterSetter
      .map((task) => {
        if (task.id != id) {
          return task.generateTemplate();
        } else {
          return task.generateEditableTemplate();
        }
      })
      .join("");
    todoInputList.innerHTML = temp;
  }

  function removeItemFunc() {
    let todoInputList = document.querySelector(view.viewString.todo_list);
    todoInputList.addEventListener("click", (e) => {
      // if (e.target.className == "btn btn-remove") {
      if (e.target.classList.contains("btn-remove")) {
        let id = e.target.id.substring(4);
        // console.log(id);
        state.userInputList_GetterSetter = model.removeTask(
          id,
          state.userInputList_GetterSetter
        );
      }
    });
  }

  function editUIRenderFunc() {
    let todoInputList = document.querySelector(view.viewString.todo_list);
    todoInputList.addEventListener("click", (e) => {
      if (e.target.className == "btn btn-edit") {
        let id = e.target.id.substring(4);
        todoListEditItemRenderFunc(id);
        // to be continue:
        // editable fild
        // ==> type new todo
        // ==> click save button
        // ==> update to new todo task
        // ==> render the task lists
      }
    });
  }

  function saveFunc() {
    let todoInputList = document.querySelector(view.viewString.todo_list);
    todoInputList.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-save")) {
        let newItem = "";

        let id = e.target.id.substring(4);
        let todoEditInputElement = document.querySelector(
          view.viewString.edit_input
        );
        console.log(todoEditInputElement.value);
        console.log(id);
        let newTask = new model.Task(todoEditInputElement.value);
        newTask.updateTaskId(id);
        console.log(newTask);
        state.userInputList_GetterSetter = model.editTask(
          id,
          state.userInputList_GetterSetter,
          newTask
        );
        //updateOnTask
        // editTask

        // to be continue:
        // editable fild
        // ==> type new todo
        // ==> click save button
        // ==> update to new todo task
        // ==> render the task lists
      }
    });
  }

  function eventTrigger() {
    todoItemInputFunc();
    removeItemFunc();
    editUIRenderFunc();
    saveFunc();
  }

  function init() {
    console.log("app init");
    eventTrigger();
    dataBinding();
  }

  return { init };
})(Model, View);

AppInit.init();
// console.log(AppInit);
