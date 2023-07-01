interface Person {
  name: string;
  surname: string;
}

interface Movie {
  title: string;
  actors: Person[];
  director: Person;
  readonly releaseYear?: string;
}

interface Film extends Movie {
  duration: number;
}

export interface Season {
  seriesCount: number;
}

interface TvSeries extends Movie {
  seasons: Season[];
}

// export const film1: Film = {
//   title: "It",
//   director: {
//     name: "",
//     surname: "",
//   },
//   releaseYear: "2020",
// };

// const film2: Film = {
//   title: "It2",
//   director: {
//     name: "",
//     surname: "",
//   },
// };

// const film3: Film = {
//   title: "It3",
//   director: {
//     name: "",
//     surname: "",
//   },
// };

type MovieTypes = "Film" | "TvSeries" | "TvShow";
type Size = "s" | "m" | "l";
type FontBaseConfig = { fontSize?: number; readonly color: string };
type FontExtraConfig = { fontWeight: 500 | 600 | 700 };

type FontConfig = FontBaseConfig & FontExtraConfig;
