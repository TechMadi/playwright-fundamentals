import { Page } from "@playwright/test";
import { urls } from "../constants/urls";



 export class BasePage{
    readonly page:Page;

    constructor (page:Page){
        this.page= page
    }

    async open(){
       
        await this.page.goto(urls.demo1.website)
    }
 }