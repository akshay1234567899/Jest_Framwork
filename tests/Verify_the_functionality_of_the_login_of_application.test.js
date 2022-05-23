import LoginPage from "../pages/LoginPage";
import { username, password } from '../config'
import HomePage from "../pages/HomePage";
import Logout from "../pages/LogoutPage";
import TopBar from "../pages/componets/TopBar";

// const loginpage = new LoginPage();
// const topbar = new TopBar();
// const homepage = new HomePage();
// const logoutpage = new Logout();

describe('Verify_the_functionality_of_the_login_of_application',()=>{
    let loginpage;
    let topbar;
    let homepage;
    let logoutpage;

    beforeAll(async ()=>{
        loginpage = new LoginPage();
        topbar = new TopBar();
        homepage = new HomePage();
        logoutpage = new Logout();
    })

    
    it('verify home page functionality working fine or not', async ()=>{
        await homepage.visit();
        await topbar.isTopBarDisplayed();
     })

    it('User should login to application', async () => {
		
	//	await topbar.isTopBarDisplayed();
		await topbar.clickSignInButton();
		await loginpage.isLoginFormDisplayed();
		await loginpage.login(username, password);
        await page.goBack();
        console.log('here is the logout page')
        await logoutpage.is_logoutbuttondisplyed();
	})
    
    // it('User should be login after successfully login in the application',async()=>{
    //   await logoutpage.is_logoutbuttondisplyed();
    // })

})