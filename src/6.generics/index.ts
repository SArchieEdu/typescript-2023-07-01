export function sum() {
  return 1 + 1;
}

type Response<Result> = {
  status: 200 | 500 | 404;
  result?: Result;
};

function test(a: string) {}

type FilmResponse = Response<Film>;
type TvSeriesResponse = Response<TvSeries>;

function makeRequest<Result>(url: string): Promise<Response<Result>> {
  return fetch(url).then((response) => response.json());
}

type TvSeries = {
  title: string;
  seasonsCount: number;
};

function getFilms() {
  return makeRequest<Film>("films");
}

function getTvSeries() {
  return makeRequest<TvSeries>("tvSeries");
}

class Requester<BaseUrl extends string, Logger> {
  baseUrl: BaseUrl;
  logger: Logger;

  constructor(baseUrl: BaseUrl, logger: Logger) {
    this.baseUrl = baseUrl;
    this.logger = logger;
  }
}

new Requester<string, { log: () => void }>("", {
  log: () => console.log(),
});

function getProperty<
  CustomObject extends {},
  Property extends keyof CustomObject
>(obj: CustomObject, propertyName: Property) {
  return obj[propertyName];
}

type Film = {
  title: string;
  duration: number;
};

type Getters<Entity extends {}> = {
  [Property in keyof Entity as `get${Capitalize<
    Property & string
  >}`]: () => Entity[Property];
};

type Setters<Entity extends {}> = {
  [Property in keyof Entity as `set${Capitalize<Property & string>}`]: (
    value: Entity[Property]
  ) => void;
};

type CompleteEntity<Entity extends {}> = Entity &
  Getters<Entity> &
  Setters<Entity>;

type FilmGetters = Getters<Film>;
type FilmSetters = Setters<Film>;
type CompleteFilm = CompleteEntity<Film>;

// class Movie implements CompleteFilm {
//   title: string;
//   duration: number;
//   getTitle: () => string;
//   getDuration: () => number;
//   setTitle: (value: string) => void;
//   setDuration: (value: number) => void;
// }

type Test = Pick<Film, "title">;
type Test2 = Omit<Film, "title">;

type Size = "s" | "m" | "l";

const sizeToTitle: Record<Size, string> = {
  s: "маленький",
  m: "средний",
  l: "большой",
};
