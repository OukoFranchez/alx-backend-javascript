class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Size Attribute getter and setter
  get size() {
    return this._size;
  }

  set size(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Size must be a number');
    }
    this._size = value;
  }

  // Location Attribute getter and setter
  get location() {
    return this._location;
  }

  set location(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Location must be a number');
    }
    this._location = value;
  }

  // Overriding valuof method for number casting
  valueOf() {
    return this._size;
  }

  // Overriding toStrig method for number casting
  toString() {
    return this._location;
  }
}

export default HolbertonClass;
