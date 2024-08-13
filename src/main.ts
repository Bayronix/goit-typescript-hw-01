import { callback } from "./basic/1";
import { person } from "./basic/2";
import { showMessage, calc, customError } from "./basic/4";
import { isWeekend, DayOfWeek } from "./basic/5";
import { mango, poly } from "./basic/6";
import { page1, page2 } from "./basic/7";
console.log(`1.ts: ${callback(50)}`);
console.log(`2.ts: ${person}`);
console.log(`3.ts:`);
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
  `task-6: mango: ${JSON.stringify(mango)}, poly: ${JSON.stringify(poly)}`
);

console.log(
  `task-7: page1: ${JSON.stringify(page1)}, page2: ${JSON.stringify(page2)}`
);
