import { callback } from "./basic/1";
import { person } from "./basic/2";
import { showMessage, calc, customError } from "./basic/4";
import { isWeekend, DayOfWeek } from "./basic/5";
import { mango, poly } from "./basic/6";
import { page1, page2 } from "./basic/7";
import { variable, status } from "./basic/3";
//
import { result } from "./generics/2";
import { merged } from "./generics/3";
import { createOrUpdateUserValue } from "./generics/4";
// basic
console.log("///////// basic ////////////");
console.log(`1.ts: ${callback(50)}`);
console.log(`2.ts: ${person}`);

console.log(`3.ts: variable = ${variable}, status = ${status} `);
console.log(`4.ts: ${showMessage("Error")}, ${calc(202, 202)}, ${customError}`);

const test: DayOfWeek[] = [
  DayOfWeek.Monday,
  DayOfWeek.Saturday,
  DayOfWeek.Sunday,
];

console.log(
  `5.ts: Monday - ${isWeekend(DayOfWeek.Monday)}, Saturday - ${isWeekend(
    DayOfWeek.Saturday
  )}, Sunday - ${isWeekend(DayOfWeek.Sunday)}`
);

console.log(
  `6.ts: mango: ${JSON.stringify(mango)}, poly: ${JSON.stringify(poly)}`
);

console.log(
  `7.ts: page1: ${JSON.stringify(page1)}, page2: ${JSON.stringify(page2)}`
);
// generics
console.log("////////// generics ///////////");

console.log(`2.ts: ${JSON.stringify(result)}`);
console.log(`3.ts: ${JSON.stringify(merged)} `);
console.log(`4.ts: ${JSON.stringify(createOrUpdateUserValue)}`);
