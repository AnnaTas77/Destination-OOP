class Bag {
  #owner = null;
  constructor(id, weight) {
    this.id = id;
    this.weight = weight;
  }

  getOwner() {
    return this.#owner;
  }

  assignOwner(newOwner) {
    return (this.#owner = newOwner);
  }
}

module.exports = Bag;
