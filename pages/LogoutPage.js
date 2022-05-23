
import BasePage from "./BasePage";

export default class Logout  extends BasePage{

async is_logoutbuttondisplyed(){

// // await page.click('//*[@id="settingsBox"]/ul/li[3]/a')
// await page.click('//*[@id="logout_link"]');


var aw= await page.$x('//*[@id="settingsBox"]/ul/li[3]/a/i');
aw[0].click();

}
}