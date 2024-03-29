import { Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { TodoPage } from "./todo.page";

export class App {
  private readonly _base: BasePage;
  private readonly _todo: TodoPage;

  constructor(page: Page) {
    this._base = new BasePage(page);
    this._todo=new TodoPage(page)
  }

  public get base(): BasePage {
    return this._base;
  }

  public get todo(): TodoPage {
    return this._todo;
  }
}
