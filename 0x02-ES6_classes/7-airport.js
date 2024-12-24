import util from 'util';

export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  get code() {
    return this._code;
  }

  toString() {
    return `[object ${this.code}]`;
  }

  [util.inspect.custom]() {
    return `${this.constructor.name} [${this.code}] { _name: '${this.name}', _code: '${this.code}' }`;
  }
}
