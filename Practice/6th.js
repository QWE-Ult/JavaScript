// class and objects

let DATA = "secret info";
class User {
  constructor(name, email) {
    (this.name = name), (this.email = email);
  }

  viewdata() {
    console.log("data = ", DATA);
  }
}

class admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editdata() {
    DATA = "value edited new";
  }
}

let stu1 = new User("yash", "yash@gmail.com");

let stu2 = new User("ash", "ash@gmail.com");

let dean = new User("dean", "dean@email.com");

let admin1 = new admin("adm1", "admin@colloege.com");

// try and catch

let a = 5;
let b = 10;

console.log(a + b);
console.log(a + b);

try {
  console.log(a + c); //error
} catch (err) {
  console.log(err);
}

console.log(a + b);
console.log(a + b);
