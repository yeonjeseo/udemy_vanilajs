const person = {
    firstName: "Steve",
    lastName: 'Smith',
    age: 30,
    email: 'steve@hotmail.com',
    hobby : ['music', 'sports'],
    address:{
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function(){
        return 2019 - this.age;
    }

};

let val;
val = person;

//Get specific value
val = person.firstName;
val = person["firstName"];
val = person.age;
val = person.hobby[0];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
    {name : 'John', age : 30},
    {name : 'Mike', age : 32},
    {name : 'Nancy', age : 40}
];

for(let i =0; i < people.length; i++){
    console.log(people[i]);
    console.log(people[i].age);
    console.log(people[i].name);
}
