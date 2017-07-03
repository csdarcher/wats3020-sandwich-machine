/* JavaScript for WATS 3020 Sandwich Machine Assignment */

let welcomeMessage = alert("Well Hello There! Welcome to Lettuce Eat Sandwiches! Let's get your order started!"); // Welcome message


// The prompts below  will guide user through the ordering process 

let breadType = prompt("What kind of bread would you like? (white, wheat, rye, sourdough)"); // user indicates bread type

let meatType = prompt("What kind of meat would you like? You can order more that one meat, just make sure to use a comma between your choices."); // user indicates meat type

let toppingOrder = prompt("What toppings would you like on your sandwich? If you want more than one topping, that's great! Just use a comma to seperate them."); // topping order

let condimentOrder = prompt("What condiments would you like on your sandwich? Want more that one condiment? Just use a comma between your selections when ordering."); //condiment selection


// Calculate Values 


let prices = {
  sandwich: 5, // Base price for a sandwich is $5, includes bread
  meat: 1, // Each kind of meat on a sandwich costs $1
  topping: 0.5, // Each topping costs $0.50
  condiment: 0.25 // Each condiment costs $0.25
};

// Convert order information from Strings to Arrays.

let meatArray = meatType.split(",");
let toppingArray = toppingOrder.split(",");
let condimentArray = condimentOrder.split(",");

// Calculate cost for meat, toppings, and condiments.
// Do this by first determining the length of each Array. 

// Then multiply out the costs. Refer to the attributes of the
// `prices` object in order to calculate these costs.

let meatCost = meatArray.length * prices.meat;
let toppingCost = toppingArray.length * prices.topping;
let condimentCost = condimentArray.length * prices.condiment;

// Combine the costs of each part of the sandwich to get the subtotal.
let subtotal = prices.sandwich + meatCost + toppingCost + condimentCost;

// Calculate the tax owed using the waStateTaxRate.
let waStateTaxRate = 0.065;
let orderTax = subtotal * waStateTaxRate;

// Calculate `totalPrice` by adding `subtotal` and `orderTax`.
let totalPrice = subtotal + orderTax;


// Receipt Information 
// Insert user order info into template literals 
// Must also provide the cost information so the user understands their bill.

let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: ${breadType}</p>
    <p>Meat: ${meatType}</p>
    <p>Toppings: ${toppingOrder}</p>
    <p>Condiments: ${condimentOrder}</p>
    <p>---------------------</p>
    <p class="text-right">Sandwich: $${prices.sandwich.toFixed(2)}</p>
    <p class="text-right">Meat: $${meatCost.toFixed(2)}</p>
    <p class="text-right">Toppings: $${toppingCost.toFixed(2)}</p>
    <p class="text-right">Condiments: $${condimentCost.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: $${subtotal.toFixed(2)}</p>
    <p class="text-right">Tax: $${orderTax.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Total: $${totalPrice.toFixed(2)}</p>
`

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;