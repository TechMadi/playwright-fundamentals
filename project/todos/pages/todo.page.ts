import { Page, expect } from "@playwright/test";
import { ADD_INPUT, ADD_TODO_TEST_ID, TODO_ITEM_LABEL_TEST, TODO_LIST_TEST_ID} from "../todos/locators/locator";
import { BasePage } from "./base.page";
import { ITodo} from "../constants/todo.const";

export  class TodoPage extends BasePage{
    constructor(page:Page){
        super(page)
    }
 get todoList(){return this.page.getByTestId(TODO_LIST_TEST_ID)}
 get todoInput(){return this.page.getByTestId(ADD_TODO_TEST_ID)}
 get todoItemLabel(){return this.page.getByTestId(TODO_ITEM_LABEL_TEST)}

 
async addTodoList(todo:ITodo){
     await this.todoInput.fill(todo.todo)
     await this.todoInput.press('Enter')
}


}