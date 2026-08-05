import {test, expect} from '@playwright/test'


test('auto Scrolling', async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/');


    // auto scrolling
    await page.getByRole('link', {name: 'Google+'}).click();


    await page.waitForTimeout(5000);
});


test.only('infinite looping', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/infinite_scroll');
    let pre = 0;
    while(true){
        //await page.waitForTimeout(5000);


        const cur = await page.evaluate(()=>{
            window.scrollTo(0,document.body.scrollHeight);
            return document.body.scrollHeight;
        });


        console.log("the prvious height", pre);
        console.log("the current height", cur);


    if(pre === cur){
        break;
        }
    pre = cur;
    }
    console.log("Reached end of the page");
})

