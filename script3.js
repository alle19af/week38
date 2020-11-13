class Person { // Define a class
    constructor(firstname,lastname, birthdate, status, gender, kids, pets, car, job){
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthdate = birthdate;
        this.status = status;
        this.gender = gender;
        this.kids = kids;
        this.pets = pets;
        this.car = car;
        this.job = job;
    }

    calculate_age(dob) { 
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms); 
      
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    
}


let johan = new Person('Johan'); // creating a new instance of class Person

//  Giving the class Johan, attributes and values.
    johan.firstname = "Johan",   
    johan.lastname = "Athanasopoulos",
    johan.birthdate = ('1980, 07,03'),
    johan.status = "in a committed relationship",
    johan.gender = "Male",
    johan.kids = "Aias",
    johan.pets = "none",
    johan.car = "yes",
    johan.job = "Personal Trainer"


console.log(johan);
console.log('Age: ',johan.calculate_age(new Date(1980, 07, 03)));


let alex = new Person('Alexandra');

    alex.firstname = "Alexandra",
    alex.lastname = "Gonzalez",
    alex.birthdate = ('1992, 11, 22'),
    alex.status = "in a committed relationship",
    alex.gender = "Female",
    alex.kids = "None",
    alex.pets = "Moe",
    alex.car = "no",
    alex.job = "Studies"

console.log(alex);
console.log('Age: ',alex.calculate_age(new Date(1992, 11, 22)));

var table = document.getElementById("table");

let user = [johan, alex];

for(i in user){
    table.innerHTML += "<tr><td>" + 
    user[i].firstname + 
    "</td><td>" + user[i].lastname +
    "</td><td>" + user[i].birthdate + 
    "</td><td>" + user[i].status +
    "</td><td>" + user[i].gender +
    "</td><td>" + user[i].kids +
    "</td><td>" + user[i].pets +
    "</td><td>" + user[i].car +
    "</td><td>" + user[i].job +
    "</td></tr>"

}
