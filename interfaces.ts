console.log("Interfaces");

interface Todo {
  title: string;
  text: string;
}

function showTodo(todo: Todo) {
  console.log(todo.title + " " + todo.text);
}

const todo = {
  title: "todo title",
  text: "todo text"
};

showTodo(todo);
