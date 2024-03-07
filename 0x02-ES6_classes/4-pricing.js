import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this._amount = 0;
    this._currency = null;

    this.amount = amount;
    this.currency = currency;
  }

  // amount attribute getter and setter
  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  // currency attribute getter and setter
  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Curency must be an instance of Currency');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  // Static method for price conversion
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}

export default Pricing;
