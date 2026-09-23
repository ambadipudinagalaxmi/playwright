import { test, expect } from '@playwright/test';

const CoffeeBaseUrl = 'https://webservice.toscacloud.com';
const servicekey = '2812a194-618c-3a5e-ad91-bcb2f5217ca7';

test('Get all Coffee', async ({ request }) => {
  const response = await request.get(`${CoffeeBaseUrl}/api/training/Coffees/${servicekey}`);

  console.log('Status:', response.status());

  if (response.ok()) {
    const allcoffee = await response.json();
    console.log(JSON.stringify(allcoffee, null, 2));
    console.log('Number of coffees:', allcoffee.length);
    expect(response.status()).toBe(200);
  } else {
    console.error('API failed:', await response.text());
    expect(response.status()).toBe(200); // will fail if backend is down
  }
});

test('Post New Coffee details', async ({ request }) => {
  const response = await request.post(`${CoffeeBaseUrl}/api/training/Coffees`, {
    headers: { Authorization: `Bearer ${servicekey}` },
    params: {
      key: servicekey,
      Description: 'Automation Espresso',
      id: 1,
      Name: 'Automation Espresso',
    },
  });

  console.log('Status:', response.status());

  if (response.ok()) {
    const newcoffee = await response.json();
    console.log(JSON.stringify(newcoffee, null, 2));
  } else {
    console.error('API failed:', await response.text());
  }

  expect(response.status()).toBe(200);
});

test('Update the Coffee details', async ({ request }) => {
  const response = await request.put(`${CoffeeBaseUrl}/api/training/Coffees`, {
    headers: { Authorization: `Bearer ${servicekey}` },
    params: {
      key: servicekey,
      Description: 'Hyderabad New Coffee',
      id: 1,
      Name: 'Hyderabad New Coffee',
    },
  });

  console.log('Status:', response.status());

  if (response.ok()) {
    const updatecoffee = await response.json();
    console.log(JSON.stringify(updatecoffee, null, 2));
  } else {
    console.error('API failed:', await response.text());
  }

  expect(response.status()).toBe(200);
});

test('Get Coffee by id', async ({ request }) => {
  const response = await request.get(`${CoffeeBaseUrl}/api/training/Coffees/${servicekey}`, {
    params: { id: 1 },
  });

  console.log('Status:', response.status());

  if (response.ok()) {
    const coffee = await response.json();
    console.log(JSON.stringify(coffee, null, 2));
  } else {
    console.error('API failed:', await response.text());
  }

  expect(response.status()).toBe(200);
});