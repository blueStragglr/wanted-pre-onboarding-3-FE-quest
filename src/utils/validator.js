export class validator {
  static checkAccount(email, password) {
    return this.#checkEmail(email) && this.#checkPassword(password);
  }

  static #checkEmail(email) {
    return this.#hasAtSign(email);
  }

  static #checkPassword(password) {
    return this.#isMinimumLength(password);
  }

  static #hasAtSign(value) {
    return value.includes('@');
  }

  static #isMinimumLength(value) {
    return value.length >= 8;
  }
}
