let user = {     // an object
            name: "John",  // by key "name" store value "John"
            age: 30,
            "likes birds": true       // by key "age" store value 30
            };

console.log(user);
console.log(user.name);
console.log(user.age);

user.isAdmin = true;

console.log(user);

delete user.age;

console.log(user);

user["likes birds"] = true;

console.log(user["likes birds"]);
delete user["likes birds"];
console.log(user);