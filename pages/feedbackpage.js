import { loginUrl, url } from "../config";
import BasePage from "./BasePage";

export default class FeedbackPage extends BasePage{
    async visit(){
        await page.goto(loginUrl);
    }
}