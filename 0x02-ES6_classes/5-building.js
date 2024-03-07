class Building {
  constructor(sqft) {
    this._sqft = 0;

    this.sqft = sqft;
  }

  // Sqft Attribute getter and setter
  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = value;
  }

  // Abstract method for evacuation warning message
  static evacuationWarningMesssage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default Building;
