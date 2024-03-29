import { Page } from "@playwright/test";
import { urls } from "../../blaze/constants/urls";
import { TODOS_URL } from "../constants/urls";

export class BasePage{
    readonly page:Page

    constructor(page:Page){
            this.page=page
    }

    async open(){
        await this.page.goto(TODOS_URL.todos)
    }
}