import { Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { LOGIN_BTN, PWD_ID, UNAME_ID, WELCOME_MSG } from "../fixtures/objectRepo/locator";

export class Login extends BasePage{
    constructor(page:Page){
        super(page)
    }

    get userNameInput() { return this.page.locator(UNAME_ID); }
    get passwordInput() { return this.page.locator(PWD_ID); }
    get loginInButton() { return this.page.locator(LOGIN_BTN); }
    get successMessage() { return this.page.locator(WELCOME_MSG); }


    async  login(username:string,password:string){
       
        await this.userNameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginInButton.click()
    }

}