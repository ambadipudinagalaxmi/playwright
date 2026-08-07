import { test, expect } from "@playwright/test";
test('verify dropdown value', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');  
    await page.getByRole('link', { name: 'Books' }).first().click();
	
    // select the option from the dropdown and verify the text is selected or not
    await page.locator('#products-orderby').selectOption({ label: 'Price: Low to High' });


    // // capture the selected option text
    const selectedOptionText = await page.locator('#products-orderby').textContent();
    console.log('Selected option text:', selectedOptionText);


    // Verify the selected option text is 'Price: Low to High'
    expect(selectedOptionText).toContain('Price: Low to High');
    expect(await page.locator('#products-orderby').textContent()).toContain('Price: Low to High');
    await page.waitForTimeout(3000);
});
