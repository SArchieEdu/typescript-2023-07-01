// enum

export enum Size {
  s = "s",
  m = "m",
  l = "l",
}

function calculateSize(size: Size) {}

// calculateSize("m");

enum MovieType {
  Film = "Film",
}

function playFilm(film: { __typename: MovieType.Film }) {}

// playFilm({
//   __typename: "Film",
// });

type ButtonSize = "s" | "m" | "l";

function calculateButtonSize(size: ButtonSize) {}

calculateButtonSize("l");

const inputSize = {
  s: "s",
  m: "m",
  l: "l",
  xl: "xl",
} as const;

type InputSize = keyof typeof inputSize;
