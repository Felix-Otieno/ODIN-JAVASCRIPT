let user = {
    name: "John",
    surname: "Smith"
  };
  user.age = 25; // add one more
  
  // non-integer properties are listed in the creation order
  for (let prop in user) {
    console.log( prop ); // name, surname, age
  }