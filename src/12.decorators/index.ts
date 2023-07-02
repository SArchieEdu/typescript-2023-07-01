import "reflect-metadata";

class CalculateClass {
  @LogTime()
  calculate() {}

  @LogTime()
  calculate1() {}

  @LogTime()
  calculate2() {}

  @LogTime()
  calculate3() {}

  @LogTime()
  calculate4() {}
}

function LogTime() {
  return (
    target: Object,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) => {
    const method = descriptor.value;

    descriptor.value = function (...args: any) {
      console.time(propertyName);
      const result = method(this, args);
      console.timeEnd(propertyName);

      return result;
    };
  };
}

interface Metadata {
  isSingleton: boolean;
}

type Class = new (...args: any[]) => {};
const CustomClassDecoratorKey = "CustomClassDecoratorKey";

@CustomClassDecorator({
  isSingleton: true,
})
class Service {}

function CustomClassDecorator(metadata: Metadata) {
  return function (constr: Class) {
    Reflect.defineMetadata(CustomClassDecoratorKey, metadata, constr);
  };
}

function getInstance<CurrentClass extends Class>(
  currentClass: CurrentClass
): InstanceType<CurrentClass> {
  const metadata = Reflect.getMetadata(CustomClassDecoratorKey, currentClass);

  throw "";
}

interface ConditionMetadata {
  min: number;
  max: number;
}

const ConditionMetadataKey = "ConditionMetadata";

class Dog {
  @Condition({
    min: 10,
    max: 15,
  })
  height: number;

  constructor(height: number) {
    this.height = height;
  }
}

function Condition(metadata: ConditionMetadata) {
  return function (target: Object, propertyName: string) {
    Reflect.defineMetadata(
      `ConditionMetadata_${propertyName}`,
      metadata,
      target.constructor
    );
  };
}

function validate<Entity extends {}>(entity: Entity): boolean {
  const properties = Object.getOwnPropertyNames(entity);

  return properties.every((propertyName) => {
    const metadata = Reflect.getMetadata(
      `ConditionMetadata_${propertyName}`,
      entity.constructor
    );
  });
}
