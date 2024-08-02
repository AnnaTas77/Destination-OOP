const Bag = require("../../classes/Bag");
const Person = require("../../classes/Person");
const { describe, it, test, expect } = require("@jest/globals");

describe("Bag Class", () => {
  test("can create an instance of the Bag class", () => {
    const bag1 = new Bag("123", 250);
    expect(bag1).toBeInstanceOf(Bag);
  });

  test("the weight and id have been assigned correctly", () => {
    const bag1 = new Bag("123", 500);
    expect(bag1.id).toBe("123");
    expect(bag1.weight).toBe(500);
  });

  test("owner is initialized with a value of null", () => {
    const bag1 = new Bag("123", 500);
    expect(bag1.getOwner()).toBeNull();
  });

  test("can get the initial owner using getOwner", () => {
    const bag1 = new Bag("123", 500);
    bag1.assignOwner("Maria");
    expect(bag1.getOwner()).toBe("Maria");
  });

  test("can update owner with a Person assigned to a Bag using assignOwner()", () => {});
});
