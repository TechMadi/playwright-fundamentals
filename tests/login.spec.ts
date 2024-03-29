import {expect, test} from '@playwright/test'
import { App } from '../project/blaze/page/app';
import { users } from '../project/blaze/users/user';
import { HOME_WELCOME_MSG } from '../project/blaze/constants/urls';

test("Login to Demoblaze", async ({ page }) => {
let app= new App(page)
await app.base.open();
await app.topbar.goToLogin();
console.log(users.testAdmin.username)
await app.login.login(users.testAdmin.username,users.testAdmin.password);
page.pause();
// await expect(app.login.successMessage).toHaveText(HOME_WELCOME_MSG)
});
