// 1 typeof

function test() {}

console.log(typeof test === "function");

function toUppercase(value?: string | number) {
  if (typeof value === "number") {
    return value;
  }

  return value?.toUpperCase();
}

// 2 Truthiness narrowing

function calculate(a: number, b: number, c?: number) {
  if (c !== undefined) {
    return a + b + c;
  }

  return a + b;
}

// 3 equality narrowing

function sum(a: number | string, b: number | boolean) {
  if (a === b) {
    return a + b;
  }
}

// 4 in

type Dog = {
  bark(): void;
};
type Cat = {
  meow(): void;
};
type Wolf = {
  bark(): void;
  run(): void;
};

function makeSomeNoise(animal: Dog | Cat | Wolf) {
  if ("bark" in animal) {
    animal.bark();
  }
}

// 5 instanceof
function log(date: Date | string) {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    return date.toUpperCase();
  }
}

// 6 type predicates

type Film = {
  title: string;
  duration: number;
};

function isFilm(entity: unknown): entity is Film {
  const film = entity as Film;
  return typeof film?.title === "string" && typeof film?.duration === "number";
}

function getFilm(): Promise<Film | null> {
  return fetch("")
    .then((response) => response.json())
    .then((result: unknown) => {
      if (isFilm(result)) {
        return result;
      }

      return null;
    });
}

// 7 discriminated unions

type TvSeries = {
  __typename: "TvSeries";
  seasonsCount: number;
};

type TvShow = {
  __typename: "TvShow";
  duration: number;
};

function getDuration(movie: TvSeries | TvShow) {
  if (movie.__typename === "TvShow") {
    return movie.duration;
  }
}
