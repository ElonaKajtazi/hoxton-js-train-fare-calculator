// - Ask the user for their age and how far they are travelling (in km)

// let userAge = Number(prompt("How old are you?"));
// let userDistance = Number(prompt("How far are you travelling?"));

//    -- The price per travelled km will be £0.21
// let pricePerKm = 0.21;

//    -- Junior passengers (under 18) get a 20% discount
//    -- Senior passengers (over 65) get a 40% discount
// let juniorPrice = pricePerKm - pricePerKm * 0.2;
// let seniorPrice = pricePerKm - pricePerKm * 0.4;

// - Based on the answers, print a message in the console which tells the user how much they will need to pay for the ride.

// if (userAge < 18) {
//   console.log(`You need to pay £${(juniorPrice * userDistance).toFixed(2)}`);
// } else if (userAge > 65) {
//   console.log(`You need to pay £${(seniorPrice * userDistance).toFixed(2)}`);
// } else {
//   console.log(`You need to pay £${(pricePerKm * userDistance).toFixed(2)}`);
// }

//CHALLENGE
/* Rewrite your program so that the user chooses a starting point and a destination 
from a list of stations, besides inputting their age, and then get the ticket price.*/

/* You can come up with the stations' names and distances. 
Try also to code it so that you only need to change the price per km in one place,
 and all the stations should have the updated price*/

//Prices per km
let pricePerKm = 0.21;

//Starting Point
let startingPoint = prompt(`Where are you starting from?
Choose from: Sishman, Babaj, Duzhnje, Korenice, Meje, Gjakova, Prishtina`);
// Destination
let destination = prompt(`Where are you going? 
Choose from: Sishman, Babaj, Duzhnje, Korenice, Meje, Gjakova, Prishtina`);
// Station Names
let station1 = "Shishman";
let station2 = "Babaj";
let station3 = "Duzhnje";
let station4 = "Korenice";
let station5 = "Meje";
let station6 = "Gjakova";
let station7 = "Prishtina";
// Station Distances
let station1ToStation2Distance = 5;
let station1ToStation3Distance = 12;
let station1ToStation4Distance = 18;
let station1ToStation5Distance = 22;
let station1ToStation6Distance = 30;
let station1ToStation7Distance = 110;

// STARTING POINT: STATION1 - SHISHMAN
if (startingPoint === station1) {
  if (destination === station2) {
    console.log(
      `You need to pay £${(pricePerKm * station1ToStation2Distance).toFixed(2)}`
    );
  } else if (destination === station3) {
    console.log(
      `You need to pay £${(pricePerKm * station1ToStation3Distance).toFixed(2)}`
    );
  } else if (destination === station4) {
    console.log(
      `You need to pay £${(pricePerKm * station1ToStation4Distance).toFixed(2)}`
    );
  } else if (destination === station5) {
    console.log(
      `You need to pay £${(pricePerKm * station1ToStation5Distance).toFixed(2)}`
    );
  } else if (destination === station6) {
    console.log(
      `You need to pay £${(pricePerKm * station1ToStation6Distance).toFixed(2)}`
    );
  } else if (destination === station7) {
    console.log(
      `You need to pay £${(pricePerKm * station1ToStation7Distance).toFixed(2)}`
    );
  }
}
//SARTING POINT: STATION2 - BABAJ
if (startingPoint === station2) {
  if (destination === station1) {
    console.log(
      `You need to pay £${(pricePerKm * station1ToStation2Distance).toFixed(2)}`
    );
  } else if (destination === station3) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation3Distance - station1ToStation2Distance)
      ).toFixed(2)}`
    );
  } else if (destination === station4) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation4Distance - station1ToStation2Distance)
      ).toFixed(2)}`
    );
  } else if (destination === station5) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation5Distance - station1ToStation2Distance)
      ).toFixed(2)}`
    );
  } else if (destination === station6) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation6Distance - station1ToStation2Distance)
      ).toFixed(2)}`
    );
  } else if (destination === station7) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation7Distance - station1ToStation2Distance)
      ).toFixed(2)}`
    );
  }
}
//SARTING POINT: STATION3 - DUZHNJE
if (startingPoint === station3) {
  if (destination === station1) {
    console.log(
      `You need to pay £${(pricePerKm * station1ToStation3Distance).toFixed(2)}`
    );
  } else if (destination === station2) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation3Distance - station1ToStation2Distance)
      ).toFixed(2)}`
    );
  } else if (destination === station4) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation4Distance - station1ToStation3Distance)
      ).toFixed(2)}`
    );
  } else if (startingPoint === station3 && destination === station5) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation5Distance - station1ToStation3Distance)
      ).toFixed(2)}`
    );
  } else if (destination === station6) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation6Distance - station1ToStation3Distance)
      ).toFixed(2)}`
    );
  } else if (destination === station7) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation7Distance - station1ToStation3Distance)
      ).toFixed(2)}`
    );
  }
}
//SARTING POINT: STATION4 - KORENICE
if (startingPoint === station4) {
  if (destination === station1) {
    console.log(
      `You need to pay £${(pricePerKm * station1ToStation4Distance).toFixed(2)}`
    );
  } else if (destination === station2) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation4Distance - station1ToStation2Distance)
      ).toFixed(2)}`
    );
  } else if (destination === station3) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation4Distance - station1ToStation3Distance)
      ).toFixed(2)}`
    );
  } else if (destination === station5) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation5Distance - station1ToStation4Distance)
      ).toFixed(2)}`
    );
  } else if (destination === station6) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation6Distance - station1ToStation4Distance)
      ).toFixed(2)}`
    );
  } else if (startingPoint === station4 && destination === station7) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation7Distance - station1ToStation4Distance)
      ).toFixed(2)}`
    );
  }
}
//SARTING POINT: STATION5 - MEJE
if (startingPoint === station5) {
  if (destination === station1) {
    console.log(
      `You need to pay £${(pricePerKm * station1ToStation5Distance).toFixed(2)}`
    );
  } else if (destination === station2) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation5Distance - station1ToStation2Distance)
      ).toFixed(2)}`
    );
  } else if (destination === station3) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation5Distance - station1ToStation3Distance)
      ).toFixed(2)}`
    );
  } else if (destination === station4) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation5Distance - station1ToStation4Distance)
      ).toFixed(2)}`
    );
  } else if (destination === station6) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation6Distance - station1ToStation5Distance)
      ).toFixed(2)}`
    );
  } else if (destination === station7) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation7Distance - station1ToStation5Distance)
      ).toFixed(2)}`
    );
  }
}

//SARTING POINT: STATION6 - GJAKOVA
if (startingPoint === station6) {
  if (destination === station1) {
    console.log(
      `You need to pay £${(pricePerKm * station1ToStation6Distance).toFixed(2)}`
    );
  } else if (destination === station2) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation6Distance - station1ToStation2Distance)
      ).toFixed(2)}`
    );
  } else if (destination === station3) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation6Distance - station1ToStation3Distance)
      ).toFixed(2)}`
    );
  } else if (destination === station4) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation6Distance - station1ToStation4Distance)
      ).toFixed(2)}`
    );
  } else if (destination === station5) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation6Distance - station1ToStation5Distance)
      ).toFixed(2)}`
    );
  } else if (destination === station7) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation7Distance - station1ToStation6Distance)
      ).toFixed(2)}`
    );
  }
}
// STARTING POINT:  STATION7 - PRISHTINA
if (startingPoint === station7) {
  if (destination === station1) {
    console.log(
      `You need to pay £${(pricePerKm * station1ToStation7Distance).toFixed(2)}`
    );
  } else if (destination === station2) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation7Distance - station1ToStation2Distance)
      ).toFixed(2)}`
    );
  } else if (destination === station3) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation7Distance - station1ToStation3Distance)
      ).toFixed(2)}`
    );
  } else if (destination === station4) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation7Distance - station1ToStation4Distance)
      ).toFixed(2)}`
    );
  } else if (destination === station5) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation7Distance - station1ToStation5Distance)
      ).toFixed(2)}`
    );
  } else if (destination === station6) {
    console.log(
      `You need to pay £${(
        pricePerKm *
        (station1ToStation7Distance - station1ToStation6Distance)
      ).toFixed(2)}`
    );
  }
}
