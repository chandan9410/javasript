class user {
  constructor(username, age, password) {
    this.username = username;
    this.age = age;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}abc`
  }
}
const tetsingh = new user("ck", 1111, "dfgdfg");
console.log(tetsingh.username);
