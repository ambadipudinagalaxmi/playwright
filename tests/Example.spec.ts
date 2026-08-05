import{test, expect} from '@playwright/test'

test('tc1', async({page})=>{
await page.goto("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=818629465366&hvpos=&hvnetw=g&hvrand=839053348093309671&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9197740&hvtargid=kwd-64107830&hydadcr=14452_2463924&mcid=e9c68a2d0f333bcaacd29ec00843c329&hvocijid=839053348093309671--&hvexpln=nav&gad_source=1");
await page.getByRole('link', {name:"Today's Deals"}).click();
await page.getByRole("button", {name:'Trending'}).first().click();
await page.waitForTimeout(3000);

});