import { test, expect } from '@playwright/test';

const CoffeeBaseUrl = 'https://webservice.toscacloud.com';
const servicekey = '2812a194-618c-3a5e-ad91-bcb2f5217ca7';

// GET all coffees
test('Get all Coffee', async ({ request }) => {
  const response = await request.get(`${CoffeeBaseUrl}/api/training/Coffees`, {
    params: { key: servicekey },
  });
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const allcoffee = await response.json();
  console.log(JSON.stringify(allcoffee, null, 2));
  console.log('Number of coffees:', allcoffee.length);
});

// POST new coffee
test('Post New Coffee details', async ({ request }) => {
  const response = await request.post(`${CoffeeBaseUrl}/api/training/Coffees`, {
    headers: { Authorization: `Bearer ${servicekey}` },
    data: {
      key: servicekey,
      id: 1,
      Name: 'Automation Espresso',
      Description: 'Automation Espresso',
    },
  });
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const newcoffee = await response.json();
  console.log(JSON.stringify(newcoffee, null, 2));
});

// PUT update coffee
test('Update the Coffee details', async ({ request }) => {
  const response = await request.put(`${CoffeeBaseUrl}/api/training/Coffees/1`, {
    headers: { Authorization: `Bearer ${servicekey}` },
    data: {
      key: servicekey,
      id: 1,
      Name: 'Hyderabad New Coffee',
      Description: 'Hyderabad New Coffee',
    },
  });
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const updatecoffee = await response.json();
  console.log(JSON.stringify(updatecoffee, null, 2));
});

// GET coffee by id
test('Get Coffee by id', async ({ request }) => {
  const response = await request.get(`${CoffeeBaseUrl}/api/training/Coffees/1`, {
    params: { key: servicekey },
  });
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const coffee = await response.json();
  console.log(JSON.stringify(coffee, null, 2));
});
