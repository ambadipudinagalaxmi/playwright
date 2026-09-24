# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Apitesting.spec.ts >> Get all Coffee
- Location: tests\Apitesting.spec.ts:7:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | const CoffeeBaseUrl = 'https://webservice.toscacloud.com';
  4  | const servicekey = '2812a194-618c-3a5e-ad91-bcb2f5217ca7';
  5  | 
  6  | // ✅ GET all coffees
  7  | test('Get all Coffee', async ({ request }) => {
  8  |   const response = await request.get(
  9  |     `${CoffeeBaseUrl}/api/training/Coffees`,
  10 |     { params: { key: servicekey } }
  11 |   );
> 12 |   expect(response.ok()).toBeTruthy();
     |                         ^ Error: expect(received).toBeTruthy()
  13 |   expect(response.status()).toBe(200);
  14 | 
  15 |   const allcoffee = await response.json();
  16 |   console.log(JSON.stringify(allcoffee, null, 2));
  17 |   console.log('Number of coffees:', allcoffee.length);
  18 | });
  19 | 
  20 | // ✅ POST new coffee
  21 | test('Post New Coffee details', async ({ request }) => {
  22 |   const response = await request.post(
  23 |     `${CoffeeBaseUrl}/api/training/Coffees`,
  24 |     {
  25 |       headers: { Authorization: `Bearer ${servicekey}` },
  26 |       data: {
  27 |         key: servicekey,
  28 |         id: 1,
  29 |         Name: 'Automation Espresso',
  30 |         Description: 'Automation Espresso',
  31 |       },
  32 |     }
  33 |   );
  34 |   expect.soft(response.ok()).toBeTruthy();
  35 |   expect.soft(response.status()).toBe(200);
  36 | 
  37 |   const newcoffee = await response.json();
  38 |   console.log(JSON.stringify(newcoffee, null, 2));
  39 | });
  40 | 
  41 | // ✅ PUT update coffee
  42 | test('Update the Coffee details', async ({ request }) => {
  43 |   const response = await request.put(
  44 |     `${CoffeeBaseUrl}/api/training/Coffees/1`,
  45 |     {
  46 |       headers: { Authorization: `Bearer ${servicekey}` },
  47 |       data: {
  48 |         key: servicekey,
  49 |         id: 1,
  50 |         Name: 'Hyderabad New Coffee',
  51 |         Description: 'Hyderabad New Coffee',
  52 |       },
  53 |     }
  54 |   );
  55 |   expect.soft(response.ok()).toBeTruthy();
  56 |   expect.soft(response.status()).toBe(200);
  57 | 
  58 |   const updatecoffee = await response.json();
  59 |   console.log(JSON.stringify(updatecoffee, null, 2));
  60 | });
  61 | 
  62 | // ✅ GET coffee by id
  63 | test('Get Coffee by id', async ({ request }) => {
  64 |   const response = await request.get(
  65 |     `${CoffeeBaseUrl}/api/training/Coffees/1`,
  66 |     { params: { key: servicekey } }
  67 |   );
  68 |   expect(response.ok()).toBeTruthy();
  69 |   expect(response.status()).toBe(200);
  70 | 
  71 |   const coffee = await response.json();
  72 |   console.log(JSON.stringify(coffee, null, 2));
  73 | });
  74 | 
```