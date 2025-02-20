function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number | null {
  if(isNumber(a) && isNumber(b)){
    return a + b;
  } else {
    return null; // or throw an error
  }
}

let result1 = addSafe(10, 20); // Type 'number' is assignable to type 'number'.
let result2 = addSafe("hello", 20); // Type 'null' is assignable to type 'number | null'.
let result3 = addSafe(10, "world"); // Type 'null' is assignable to type 'number | null'.