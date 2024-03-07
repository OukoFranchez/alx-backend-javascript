import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // calling the parent class constructor with the sqft parameter
    super(sqft);
    this._floors = floors;
  }

  // Floors Attribute getter and setter
  get floors() {
    return this._floors;
  }

  set floors(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    this._floors = value;
  }

  // Overriding the method named evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}

export default SkyHighBuilding;
