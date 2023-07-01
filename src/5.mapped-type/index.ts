export type Ad = {
  serviceId: number;
  [key: string]: string | number;
};

interface Person {
  name: string;
  surname: string;
}

interface Movie {
  title: string;
  actors?: Person[];
  director: Person;
}

type Entities = {
  [key: string]: Movie;
};

const ad: Ad = {
  serviceId: 123,
  a1: "",
  a2: "",
  a3: "",
  a4: "",
  a5: "",
};

interface Row {
  title: string;
  items: Movie[];
}

type FeatureConfig = {
  [key: string]: boolean;
};

type Config = {
  [key: string]: Row;
};

type PartialMovie = {
  [Property in keyof Movie]?: Movie[Property];
};

type RequiredMovie = {
  [Property in keyof Movie]-?: Movie[Property];
};

type ReadonlyMovie = {
  readonly [Property in keyof Movie]: Movie[Property];
};

type NoReadonlyMovie = {
  -readonly [Property in keyof Movie]: Movie[Property];
};
