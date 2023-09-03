//-------Exercice1: Analysing

const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
//console.log(result);


const country = "USA";
//console.log([...country]);


let newArray = [...[,,]];
//console.log(newArray);


//-----------Exercise 2 : Employees

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

 const welcomeStudents = users.map(user => "hello " + user.firstName) 
 //console.log(welcomeStudents);

 const fullStackResidents = users.filter( user => user.role == "Full Stack Resident")
 //console.log(fullStackResidents);

 const nameOfFullStackResidents = users.filter(user => user.role == "Full Stack Resident").map(user => user.lastName)
//console.log(nameOfFullStackResidents);

//-----------Exercise 3 : Star Wars

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const epicSentence = epic.reduce((accumulator, currentValue) => accumulator +" " + currentValue + " ");
//console.log(epicSentence);


//--------------Exercise 4 : Employees #2

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

const studentsPassed = students.filter( student => student.isPassed == true)
//console.log(studentsPassed);               

const congrats = students.filter( student => student.isPassed == true).forEach( student => console.log('Good job' ${students.name} ' you passed the course in '  ${students.course}));

//**personal note i really dont know where i miss a ) 