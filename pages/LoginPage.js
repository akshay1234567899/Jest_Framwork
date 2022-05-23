import { loginUrl, url } from "../config";
import BasePage from "./BasePage";  

export default class LoginPage extends BasePage{

    async visit(){
        await page.goto(loginUrl);
    }


async isLoginFormDisplayed() {
    await page.waitForSelector('#login_form')
    await page.waitForSelector('#user_login')
    await page.waitForSelector('#user_password')
}

    async login(username, password) {
		await page.type('#user_login', username)
		await page.type('#user_password', password)
		await page.click('.btn-primary')
	}
}