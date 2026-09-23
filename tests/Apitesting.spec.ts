import { test, expect } from '@playwright/test';


const CoffeeBaseUrl = 'https://webservice.toscacloud.com';
const servicekey = '2812a194-618c-3a5e-ad91-bcb2f5217ca7';


test('Get all Coffee', async ({ request }) => {


    const response = await request.get(
        `${CoffeeBaseUrl}/api/training/Coffees/${servicekey}`
    );


    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);


    const allcoffee = await response.json();


    // console.log(allcoffee);
    console.log(JSON.stringify(allcoffee, null, 2)); // JSON.Stringify(value, replacer, space)
    console.log('Number of coffees:', allcoffee.length);
});

test("Post New Coffee details", async({request})=>{
    const response = await request.post(
        `${CoffeeBaseUrl}/api/training/Coffees`,
        {
            headers:{
                Authorization: `Bearer ${servicekey}`
            },
            params:{
            key: `${servicekey}`,
            Description: 'Automation Espresso',
            id: 1,
            Name: 'Automation Espresso',
        },
    });
   
    expect.soft(response.ok()).toBeTruthy();
    expect.soft(response.status()).toBe(200);


    const newcoffee = await response.json();


    // console.log(allcoffee);
    console.log(JSON.stringify(newcoffee, null, 2)); // JSON.Stringify(value, replacer, space)
    console.log('Number of coffees:', newcoffee.length);


});


test("update the Coffee details", async({request})=>{
    const response = await request.put(
        `${CoffeeBaseUrl}/api/training/Coffees`,
        {
            headers:{
                Authorization: `Bearer ${servicekey}`
            },
            params:{
            key: `${servicekey}`,
            Description: 'Hyderabad New Coffee',
            id: 1,
            Name: 'Hyderabad New Coffee',
        },
    });
   
    expect.soft(response.ok()).toBeTruthy();
    expect.soft(response.status()).toBe(200);


    const updatecoffee = await response.json();


    // console.log(allcoffee);
    console.log(JSON.stringify(updatecoffee, null, 2)); // JSON.Stringify(value, replacer, space)
});


test('Get Coffee by id', async ({ request }) => {


    const response = await request.get(
        `${CoffeeBaseUrl}/api/training/Coffees/${servicekey}`,
        {
            params:{
            id: 1,
        },
    });


    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);


    const allcoffee = await response.json();


    // console.log(allcoffee);
    console.log(JSON.stringify(allcoffee, null, 2)); // JSON.Stringify(value, replacer, space)
    console.log('Number of coffees:', allcoffee.length);
});
