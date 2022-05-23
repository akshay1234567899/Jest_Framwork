import { loginUrl } from "../config";
import BasePage from "./BasePage"

export default class HomePage extends BasePage{

    async visit(){
        await page.goto(loginUrl);
    }
    

    async clickHomepageLink() {
		await page.click('#homeMenu')
	}

	async clickOnlineBankingLink() {
		await page.click('#onlineBankingMenu')
	}

	async clickFeedbackLink() {
		await page.click('#feedback')
	}
}