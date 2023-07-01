// |
export let size: "s" | "m" | "l" = "s";
let fontWeight: "bold" | 500 = 500;

let status: "success" | "error";

function toUpperCase(text: string | number) {
  // text.toUpperCase();
}

// &
let customSize: { a: string } & { b: number } = {
  a: "",
  b: 132,
};

function test(a: { a: string }) {}

test(customSize);
