import exp from "constants";
import { todos } from "../project/todos/constants/todo.const";
import { App } from "../project/todos/pages/app";

const { test, expect } = require("@playwright/test");


test.beforeEach(async({page})=>{
  let app = new App(page);

    await app.base.open();
})
// Checking if Empty
test.describe("Intial state", () => {
  test("should be  empty with focused input", async ({ page }) => {
    /**
     * test("What are you testing",steps to test)
     * Where to go to
     * Expect to find an empty list 
     */
    // let app = new App(page);

   

    await expect(page.todo.todoList).toBeEmpty();
    await expect(page.todo.todoInput).toBeFocused();
  });
});

test.describe("New Todo", () => {
  //  Creating Todos
  test("should allow me to add todo items", async ({ page }) => {
    let app = new App(page);

    await app.base.open();
    // Create First Todo
    app.todo.addTodoList(todos[0]);
    await expect(app.todo.todoItemLabel).toHaveText([todos[0].todo]);

    // create second todo
    app.todo.addTodoList(todos[1]);
    await expect(app.todo.todoItemLabel).toHaveText([
      todos[0].todo,
      todos[1].todo,
    ]);
  });
});


