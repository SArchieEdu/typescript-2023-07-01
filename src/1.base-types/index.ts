// boolean
let isTrue: boolean = false;
// isTrue = 123;
// isTrue = 'true';
isTrue = true;

// Number
let num: number = 123;
let float: number = 10.5;
let binary: number = 0b101;

// Bigint
let bigNumber: bigint = 100n;

// String
let str: string = "Hello";
str = "";
str = "asdasdadsadasdasdasdasdasdasdadewqfwfwqfqfqwf q $";

// Null
let nullLet: null = null;
// nullLet = undefined;
// nullLet = "";
// nullLet = 123;

// Undefined
let undefinedLet: undefined = undefined;
// undefinedLet = null;

// Object
let objectLet: { a: string; b: number; c: { d: null } } = {
  a: "",
  b: 123,
  c: {
    d: null,
  },
};

// Array
let arrayLet: { a: string }[] = [{ a: "123" }];

// Tuple
let tupleLet: [string, number, { a: number }] = ["", 1, { a: 123 }];

// Function
function printHello(params: { a: string; b: number }): undefined {
  return undefined;
}

printHello({ a: "", b: 123 });

const myFunc = (a: string): string => {
  return a;
};

let myObj: { a: string; getA(): string } = {
  a: "",
  getA: () => {
    return "";
  },
};

// Any
let anyLet: any = undefined;
anyLet.a;

// Unknown
let unknownLet: unknown = { a: "" };
// unknownLet.a;
// let customObj: {a: string} = unknownLet;

// Literal types
let size: "s" = "s";
let customString: string = size;
// size = customString;
