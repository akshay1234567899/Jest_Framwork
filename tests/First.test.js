import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import TopBar from "../pages/componets/TopBar";

import { username, password, timeout } from '../config'

describe('First script',()=>{
    let homepage;
    let topbar;
    let loginpage;

    beforeAll(async ()=>{
        homepage = new HomePage();
        topbar = new TopBar();
        loginpage = new LoginPage();
    })

    it('verify home page functionality working fine or not', async ()=>{
       await homepage.visit();
       await topbar.isTopBarDisplayed();
    })



    it('should login to application', async () => {
		await homepage.visit();
		await topbar.isTopBarDisplayed();
		await topbar.clickSignInButton();
		await loginpage.isLoginFormDisplayed();
		await loginpage.login(username, password);
	})  

    
    
 })