let myLet = "";

function getRandomInteger(flag: boolean) {
  if (flag) {
    return "sadasd".toUpperCase();
  }
  return Math.random();
}

function getProperty<
  CustomObject extends {},
  Property extends keyof CustomObject
>(obj: CustomObject, propertyName: Property) {
  return obj[propertyName];
}

type Miniseries = {
  title: string;
  duration: number;
};

const miniseries: Miniseries = {
  title: "",
  duration: 123,
};

getProperty(miniseries, "duration");

function call<ArgsType extends any[], ReturnType>(
  functionToCall: (...args: ArgsType) => ReturnType,
  ...args: ArgsType
): ReturnType {
  return functionToCall(...args);
}

const result = call(getProperty, miniseries, "duration");

type AnyFunction = (...args: any[]) => any;

type Test<T> = T extends { a: string; b: { c: infer CType } } ? CType : never;
type MyReturnType<T> = T extends (...args: any[]) => infer ReturnType
  ? ReturnType
  : never;
type MyArgType<T> = T extends (...args: infer ArgType) => any ? ArgType : never;

const a = {
  a: "Hello",
  b: {
    c: {
      title: "it",
      duration: 123,
    },
  },
};

type AType = Test<typeof a>;
