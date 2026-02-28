
// const gozie = "teegeeone"

// const tg = "Techie"

// let tg2 = "Techie2"

// console.log(gozie)

// const = constant variable, cannot be reassigned


// appfurstring = "i am a string"
// appfurstring2 = "i am also a string"

// console.log(typeof(appfur))
// console.log(typeof(appfurstring)) " "



// this is a number for the appfur variable
// appfur = 10

// furapp = 40

// console.log(appfur > furapp)
// console.log(appfur !== furapp)
// console.log(appfur < furapp)

// console.log(typeof(appfur > furapp))

// console.log(appfurstring + " " + appfurstring2)

// console.log(`${appfurstring} ok ${appfurstring2} 10`)

// appfur = 

// console.log(appfur)

// console.log(typeof(appfur))

// a = 105
// b = 20
// console.log(a % b)

// console.log(a && b)
// console.log(typeof(a + b))

// if (a > b) {
//     console.log("i am a tech bro")
// } else if (a === b) {
//     console.log("running away from tech things");
// } else {
//     console.log("I am a tech man")
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }

// while (a > b) {
//     console.log("a is greater than b")
// } while (a > b) {
//     console.log("a is still greater than b")
// }

// a = 105
// b = 20

// function add(a, b) {
//   return a + b;
// }

// const multiply = (a, b) => a * b;



// console.log(add(5, 10));
// console.info(multiply(5, 10));

// export { add, multiply };

// ─── Celsius to Fahrenheit ───────────────────────────────────────────────────

// function celsiusToFahrenheit(celsius) {
//   return (celsius * 9) / 5 + 32;
// }

// // ─── Manual Unit Tests ───────────────────────────────────────────────────────

// function assertEqual(description, actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ PASS: ${description} → ${actual}`);
//   } else {
//     console.error(`❌ FAIL: ${description} → expected ${expected}, got ${actual}`);
//   }
// }

// const testCases = [
//   { description: "0°C (freezing point)",   input: 0,       expected: 32              },
//   { description: "100°C (boiling point)",  input: 100,     expected: 212             },
//   { description: "-273.15°C (absolute zero)", input: -273.15, expected: -459.67      },
//   { description: "37°C (body temperature)", input: 37,     expected: 98.60000000000001 },
//   { description: "-40°C (crossover point)", input: -40,    expected: -40             },
// ];

// for (let i = 0; i < testCases.length; i++) {
//   const { description, input, expected } = testCases[i];
//   assertEqual(description, celsiusToFahrenheit(input), expected);
// }




// ARRAYS

const testCases = [
  { description: "0°C (freezing point)",   input: 0,       expected: 32              },
  { description: "100°C (boiling point)",  input: 100,     expected: 212             },
  { description: "-273.15°C (absolute zero)", input: -273.15, expected: -459.67      },
  { description: "37°C (body temperature)", input: 37,     expected: 98.60000000000001 },
  { description: "-40°C (crossover point)", input: -40,    expected: -40             },
];

alex = ["alex", "blex", "clex", "dlex"]

console.log(testCases[0].description)