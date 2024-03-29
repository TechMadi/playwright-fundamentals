import  {test,expect } from '@playwright/test'


const url="https://openreplay.com/"
test ('has title',async({page})=>{
    await page.goto(url)

    // expect a title "to contain a substring "

    await expect(page).toHaveTitle(/OpenReplay/)
});

test ('get started link',async({page})=>{
    await page.goto(url)

    // "Click the get started button"

    await page.getByRole('button',{name:/Get Started/}).click();


    await expect(page).toHaveURL(/.*deploy/);
})
