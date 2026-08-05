import {test,expect} from '@playwright/test'


test("mouse Operations", async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/');
 await page.waitForTimeout(5000);

    // mouse hover
    await page.getByRole('link', {name: 'Computers'}).first().hover();


    // verify the element
    await expect(page.getByRole('link', {name: 'Notebooks'}).first()).toBeVisible();
   
    // await page.getByRole('link', {name: 'Notebooks'}).first().click(); //click default left
 await page.waitForTimeout(5000);

    // right click
     await page.getByRole('link', {name: 'Notebooks'}).first().click({button:'right'});
 await page.waitForTimeout(5000);

    // double click
    await page.getByAltText('Picture of 14.1-inch Laptop').dblclick();
    await page.waitForTimeout(5000);
 
});


/*test("drag/drop obstacle id: 60469", async({page})=>{
    await page.goto('https://obstaclecourse.tricentis.com/Obstacles/60469?retry=1');


    // capture elements
    const img1 = page.getByAltText('Toscabot');
    const img2 = page.locator('div#to');


    await img1.hover();
    await page.mouse.down();


    await page.waitForTimeout(5000);


    await img2.hover();
    await page.mouse.up();


    // use dragto method
    await img1.dragTo(img2);


    await page.waitForTimeout(5000);


});*/


test.only("drag/drop", async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');


    await page.locator('div#column-a').dragTo(page.locator('div#column-b'));
    await page.waitForTimeout(5000);


});


