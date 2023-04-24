export class Log {
  static success(message) {
    console.log(message, "color: green");
  }

  static error(message) {
    console.log(message, "color: red");
  }

  static info(message) {
    console.log(message, "color: blue");
  }
}
