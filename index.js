// - Ask the user for their age and how far they are travelling (in km)

let userAge = prompt("How old are you?");
let userDistance = prompt("How far are you travelling?");

//    -- The price per travelled km will be £0.21
let pricePerKm = 0.21;

//    -- Junior passengers (under 18) get a 20% discount
//    -- Senior passengers (over 65) get a 40% discount
let juniorPrice = pricePerKm - pricePerKm * 0.2;
let seniorPrice = pricePerKm - pricePerKm * 0.4;

// - Based on the answers, print a message in the console which tells the user how much they will need to pay for the ride.

if (userAge < 18) {
  console.log(`You need to pay £${(juniorPrice * userDistance).toFixed(2)}`);
} else if (userAge > 65) {
  console.log(`You need to pay £${(seniorPrice * userDistance).toFixed(2)}`);
} else {
  console.log(`You need to pay £${(pricePerKm * userDistance).toFixed(2)}`);
}
