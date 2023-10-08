// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
// program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
// use the map higher-order function to create a new object with the converted prices in Rupees.

const itemsValue = {
    item1: 100,
    item2: 200,
    item3: 300,
    item4: 400,
    item5: 500
};

const exchangeRate = 80;

const result = Object.fromEntries(Object.entries(itemsValue).map(([key, value]) => [key, value * exchangeRate]));

console.log(result);
