export default class BasePage{

    async getTitle(){
        return await page.getTitle();
    }

    async getURL(){
        return await page.url();
    }

    async visit(){
        await page.goto("http://zero.webappsecurity.com/")
       
    }

  
    
}