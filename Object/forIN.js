let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user) {
    // keys
    console.log( key );  // name, age, isAdmin
    // values for the keys
    console.log( user[key] ); // John, 30, true
  }