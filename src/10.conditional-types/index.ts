interface IdLabel {
  id: number;
}

interface NameLabel {
  name: string;
}

interface TrueLabel {
  isTrue: boolean;
}

type NameOrId<Label extends number | string | boolean> = Label extends number
  ? IdLabel
  : NameLabel;

function createLabel<Label extends string | number>(
  id: Label
): NameOrId<Label> {
  throw "";
}

let idLabel = createLabel<number>(123);
idLabel.id;
let nameLabel = createLabel<string>("123");
nameLabel.name;
