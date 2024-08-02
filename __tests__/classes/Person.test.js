const { describe, it, test, expect } = require("@jest/globals");
const Person = require("../../classes/Person");
const Bag = require("../../classes/Bag");

describe("Person Class", () => {
  test("can create an instance of the Person class", () => {
    const person1 = new Person("Anna", "London");

    expect(person1).toBeInstanceOf(Person);
  });

  test("name and destination have been assigned correctly", () => {
    const person1 = new Person("Anna", "London");

    expect(person1.name).toBe("Anna");
    expect(person1.destination).toBe("London");
  });

  test("bags initializes as an empty array", () => {
    const person1 = new Person("Anna", "London");
    expect(person1.getBags().length).toBe(0);
  });

  test("addBags() adds a bag to the bags array", () => {
    const person1 = new Person("Anna", "London");
    const bag = new Bag("123", 500);

    person1.addBags(bag);
    expect(person1.getBags().length).toBe(1);
    expect(person1.getBags()).toEqual([bag]);
  });
});
