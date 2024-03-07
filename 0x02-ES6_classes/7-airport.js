class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Name Attribute getter and setter
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Code Attribute getter and setter
  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // Define the default string description of the Airport class
  get [Symbol.toStringTag]() {
    return this._code;
  }
}

export default Airport;
