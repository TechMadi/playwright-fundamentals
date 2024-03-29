import { Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { SideBar } from "./components/sidebar.component";
import { TopBar } from "./components/topbar.component";
import { Login } from "./login.page";

export class App {
  private readonly _topbar: TopBar;
  private readonly _sidebar: SideBar;
  private readonly _base: BasePage;
  private readonly _login: Login;
  // private readonly _buyphone: BuyPhone;

constructor(page:Page){
    this._topbar = new TopBar(page);
    this._sidebar = new SideBar(page);
    this._base = new BasePage(page);
    this._login = new Login(page);
    // this._buyphone = new BuyPhone(page);
}


  public get topbar(): TopBar {
    return this._topbar;
  }

  public get sidebar(): SideBar {
    return this._sidebar;
  }
  public get base(): BasePage {
    return this._base;
  }
  public get login(): Login {
    return this._login;
  }
}
