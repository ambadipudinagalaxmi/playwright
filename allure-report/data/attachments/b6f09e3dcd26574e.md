# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Apitesting.spec.ts >> Get Coffee by id
- Location: tests\Apitesting.spec.ts:85:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | 
  4   | const CoffeeBaseUrl = 'https://webservice.toscacloud.com';
  5   | const servicekey = '2812a194-618c-3a5e-ad91-bcb2f5217ca7';
  6   | 
  7   | 
  8   | test('Get all Coffee', async ({ request }) => {
  9   | 
  10  | 
  11  |     const response = await request.get(
  12  |         `${CoffeeBaseUrl}/api/training/Coffees/${servicekey}`
  13  |     );
  14  | 
  15  | 
  16  |     expect(response.ok()).toBeTruthy();
  17  |     expect(response.status()).toBe(200);
  18  | 
  19  | 
  20  |     const allcoffee = await response.json();
  21  | 
  22  | 
  23  |     // console.log(allcoffee);
  24  |     console.log(JSON.stringify(allcoffee, null, 2)); // JSON.Stringify(value, replacer, space)
  25  |     console.log('Number of coffees:', allcoffee.length);
  26  | });
  27  | 
  28  | test("Post New Coffee details", async({request})=>{
  29  |     const response = await request.post(
  30  |         `${CoffeeBaseUrl}/api/training/Coffees`,
  31  |         {
  32  |             headers:{
  33  |                 Authorization: `Bearer ${servicekey}`
  34  |             },
  35  |             params:{
  36  |             key: `${servicekey}`,
  37  |             Description: 'Automation Espresso',
  38  |             id: 1,
  39  |             Name: 'Automation Espresso',
  40  |         },
  41  |     });
  42  |    
  43  |     expect.soft(response.ok()).toBeTruthy();
  44  |     expect.soft(response.status()).toBe(200);
  45  | 
  46  | 
  47  |     const newcoffee = await response.json();
  48  | 
  49  | 
  50  |     // console.log(allcoffee);
  51  |     console.log(JSON.stringify(newcoffee, null, 2)); // JSON.Stringify(value, replacer, space)
  52  |     console.log('Number of coffees:', newcoffee.length);
  53  | 
  54  | 
  55  | });
  56  | 
  57  | 
  58  | test("update the Coffee details", async({request})=>{
  59  |     const response = await request.put(
  60  |         `${CoffeeBaseUrl}/api/training/Coffees`,
  61  |         {
  62  |             headers:{
  63  |                 Authorization: `Bearer ${servicekey}`
  64  |             },
  65  |             params:{
  66  |             key: `${servicekey}`,
  67  |             Description: 'Hyderabad New Coffee',
  68  |             id: 1,
  69  |             Name: 'Hyderabad New Coffee',
  70  |         },
  71  |     });
  72  |    
  73  |     expect.soft(response.ok()).toBeTruthy();
  74  |     expect.soft(response.status()).toBe(200);
  75  | 
  76  | 
  77  |     const updatecoffee = await response.json();
  78  | 
  79  | 
  80  |     // console.log(allcoffee);
  81  |     console.log(JSON.stringify(updatecoffee, null, 2)); // JSON.Stringify(value, replacer, space)
  82  | });
  83  | 
  84  | 
  85  | test('Get Coffee by id', async ({ request }) => {
  86  | 
  87  | 
  88  |     const response = await request.get(
  89  |         `${CoffeeBaseUrl}/api/training/Coffees/${servicekey}`,
  90  |         {
  91  |             params:{
  92  |             id: 1,
  93  |         },
  94  |     });
  95  | 
  96  | 
> 97  |     expect(response.ok()).toBeTruthy();
      |                           ^ Error: expect(received).toBeTruthy()
  98  |     expect(response.status()).toBe(200);
  99  | 
  100 | 
  101 |     const allcoffee = await response.json();
  102 | 
  103 | 
  104 |     // console.log(allcoffee);
  105 |     console.log(JSON.stringify(allcoffee, null, 2)); // JSON.Stringify(value, replacer, space)
  106 |     console.log('Number of coffees:', allcoffee.length);
  107 | });
  108 | 
```