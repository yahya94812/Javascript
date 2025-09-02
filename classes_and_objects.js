// ES6 syntax
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet(){
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const p1 = new Person("Yahya", 25);
p1.greet();
