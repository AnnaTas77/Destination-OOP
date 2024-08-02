class Person {
  #bags = [];
  constructor(name, destination) {
    this.name = name;
    this.destination = destination;
  }

  getBags() {
    return this.#bags;
  }

  addBags(newBag) {
    this.#bags.push(newBag);
  }
}

module.exports = Person;
