namespace demo {
  //example of interface
  interface Animal {
    age: number;
    nature?: string;
  }

  //property declaration on constructor
  class Human implements Animal {
    constructor(
      public age: number,
      public nature: string,
      public color: string
    ) {}
  }

  //example of class
  class Person {
    //private members
    private name: string;
    private surname: string;

    //public members
    public age: number = 0;
    //enum type
    public gender: GenderEnum = GenderEnum.MALE;

    //verbose constructor
    constructor(name: string, surname: string = "no surname") {
      this.name = name;
      this.surname = surname;
    }

    getAllInfo(): string {
      return `This is my full name ${this.name} ${this.surname} and i'm ${
        this.age
      } old and i'm a ${this.gender == GenderEnum.MALE ? "male" : "female"}!`;
    }

    //void return for no return function
    setOneYearMore(): void {
      this.age++;
    }

    //type return declaration
    getJSON(): string {
      return JSON.stringify(this);
    }
  }

  class Employee extends Person {
    job: string;

    constructor() {
      super("Jack", "La Motta");
      this.job = "Boxer";
    }

    getAllInfo(): string {
      return super.getAllInfo() + " and my job is " + this.job;
    }
  }

  //example enum
  enum GenderEnum {
    MALE = 0,
    FEMALE,
  }

  function main() {
    //example of duck typing (interface inference)

    let p: Animal = new Person("Mary", "Rossi");
    p.age = 12;

    let p2 = { age: 2, nature: "cat" };

    let h: Animal = new Human(5, "dog", "black");

    let e: Employee = new Employee();

    //test duck typing
    let zoo = (a: Animal) => console.log(`the age of ${a.nature} is ${a.age}`);
    zoo(p);
    zoo(p2);
    zoo(h);
    zoo(e);

    //cast 2 way
    (p as Person).gender = GenderEnum.FEMALE;
    (<Person>p).setOneYearMore();
    console.log((p as Person).getAllInfo());
    //console.log((p as Person).getJSON());

    //Generics

    //generics for collection
    let nums: Array<number> = [1, 3, 4, 5];
    //compiling error
    //--> nums.push("oi");

    //set type for class
    let processor: Processor<Animal> = new Processor<Animal>();
    processor.elaborate(p);
    processor.elaborate(h);

    let animalProcessor: AnimalProcessor<Human> = new AnimalProcessor<Human>();
    animalProcessor.showNature(p);
    animalProcessor.showNature(h);
  }

  //generic in class
  class Processor<T> {
    elaborate(item: T): void {
      console.log("-----------------------------");
      console.log(item);
      console.log("-----------------------------");
    }
  }

  //generic interfaace in class
  class AnimalProcessor<T extends Animal> {
    showNature(item: Animal): void {
      console.log("-----------------------------");
      console.log("Nature: ", item.nature);
      console.log("-----------------------------");
    }
  }

  main();
}
