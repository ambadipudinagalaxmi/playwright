import{Page, Locator, expect} from "@playwright/test";
 export class Homepage{
       readonly page:Page;
       readonly automobile:Locator;
       readonly truck:Locator;
       readonly motorcycle:Locator;
       readonly camper:Locator;

      constructor(page: Page){
        this.page =page;
        this.automobile=page.getByRole('link',{name: 'Automobile'});
        this.truck=page.getByRole("link",{name: 'Truck'});
        this.motorcycle=page.getByRole('link', {name:'Motorcycle'});  
        this.camper=page.getByRole('link',{name: 'Camper'}); 
 }
 async goto(){
    await this.page.goto('https://sampleapp.tricentis.com/101/index.php',{ waitUntil: "domcontentloaded" });
   // await this.page.waitForTimeout(6000);
}
async auto(){
    await this.automobile.first().click();
}
async tru(){
    await this.truck.first().click();
}
async motor(){
    await this.motorcycle.first().click();
}
async cam(){
    await this.camper.first().click();
}
 }