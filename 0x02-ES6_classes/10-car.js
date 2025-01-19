export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  cloneCar() {
    return new this.constructor();
  }

  set brand(brand) {
    this._brand = brand;
  }

  get brand() {
    return this._brand;
  }

  set motor(motor) {
    this._motor = motor;
  }

  get motor() {
    return this._motor;
  }

  set color(color) {
    this._color = color;
  }

  get color() {
    return this._color;
  }
}
