class Property {
  key: string;
  value: string;

  constructor(k: string = "", v: string = "") {
    this.key = k;
    this.value = v;
  }

  toString(): string {
    return `the value for key ${this.key} is ${this.value}`;
  }
}

function parseSourceProperties(source: string): Property[] {
  let result: Property[] = [];

  const splittedSource: string[] = source.split("\n");
  result = splittedSource
    .filter((segment) => segment.length > 0)
    .map((segment) => {
      const splitBySeparator: string[] = segment.split("=");
      return new Property(splitBySeparator[0], splitBySeparator[1]);
    });

  return result;
}

export default Property;
export { parseSourceProperties };

//index.ts

/*
import Property, { parseSourceProperties } from "./module/properties";

const source = `db=postgresql
user=admin

pass=secret
`;

const allProp: Property[] = parseSourceProperties(source);

allProp.forEach((prop) => console.log(prop.toString()));




*/
