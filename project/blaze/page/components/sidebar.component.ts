import { Page } from "@playwright/test";
import {
  LAPTOPSLINK,
  MONITORSLINK,
  PHONELINK,
} from "../../fixtures/objectRepo/locator";
import { BasePage } from "../base.page";

export class SideBar extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get phonesLink() {
    return this.page.locator(PHONELINK);
  }
  get laptopLinks() {
    return this.page.locator(LAPTOPSLINK);
  }
  get monitorsLinks() {
    return this.page.locator(MONITORSLINK);
  }

  async goToPhones() {
    await this.phonesLink.click();
  }

  async goToLaptops() {
    await this.laptopLinks.click();
  }
  async goToMonitors() {
    await this.monitorsLinks.click();
  }
}
