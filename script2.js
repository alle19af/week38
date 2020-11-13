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
}


let alex = new Person("Alexandra", "Gonzalez", ('1992, 11, 22'), "in a committed relationship","Female","No kids","Moe the dog","no car", "studies");


var liste = document.getElementById("liste");

liste.innerHTML += 
"<ol><li>" + alex.firstname +
"</li><li>" + alex.lastname +
"</li><li>" + alex.birthdate +
"</li><li>" + alex.status +
"</li><li>" + alex.gender + 
"</li><li>" + alex.kids +
"</li><li>" + alex.pets +
"</li><li>" + alex.car +
"</li><li>" + alex.job + 
"</li></ol>"
