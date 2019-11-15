
document.getElementById('getPost').addEventListener('click', myPost);


function myPost() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((resp) => resp.json()) 
    .then((data) => {

      let output = "<h3>Users</h3>"
      data.forEach(function(users){
        output += `
        <div>
        <h3>ID: ${users.id}</h3>
        <h3>Name: ${users.name}</h3>
        <h3>Username: ${users.username}</h3>
        <h3>Email: ${users.email}</h3>
        <h3>Adddress: ${users.address}</h3>
        <h3>Geo Location: ${users.geo}</h3>
        </div>
        `
      })
      document.getElementById('output').innerHTML = output;
    
    
    })
  

  // .then(response => response.json())
  // .then(json => console.log(json))

 // 

}

// myText();






// fetch('https://jsonplaceholder.typicode.com/users', {
//   headers: { "Content-Type": "application/json; charset=utf-8" },
//   method: 'POST',
//   body: JSON.stringify({
//     username: 'Elon Musk',
//     email: 'elonmusk@gmail.com',
//   })
// })







hello = function() {
  document.write('I said Hi');
}

hello();

//arrow function
greetMe = () => ('Good morning');
console.log(greetMe());
















// hearders: {"Content-Type": "application/json;charset=utf-8"},
    // method: "POST",
    // body: JSON.stringify({
      // username:"Elon Musk",
      // email:"elonmusk@gmail.com",
    // })











// const myAns = document.getElementByClassName('iCode');

//Runs a number up to the next integer
// const maths = Math.ceil(4.2);
// console.log(maths);

// const math = Math.ceil(-7.3);
// console.log(math);

//Runs a number down to the next integer
// const mas = Math.floor(4.7);
// console.log(mas);

// const mass = Math.floor(-7.3);
// console.log(mass);

// const myHypo = Math.hypot(3,2,5);
// console.log(myHypo);

// const body = document.body;
// console.log(body);

// const para = document.p;
// console.log(para);

//Accessing imges
// const images = document.images;
// console.log(images);


// function imgLength() {
//   for( i = 0; i < document.images.length;i++ ) {
//     return document.images[i];

//   }
// }

// const output = imgLength();
// console.log(output);

//getting element by id
// const getElement = document.getElementById('cow');
// console.log(getElement);


//getAttribute
// const xample = NonDairy.getAttribute('id');
// console.log(xample);

//creating Element 
// const myElement = document.createElement('li');
// console.log(myElement);

//creating a textNode since createElement list is empty
// const myText = document.createTextNode('Flash');
// console.log(myText);

//linking the createElement (<li>) which is empty and the text element, we have to use Bags.appendChild(myText)

// const linkTogether = myElement.appendChild(myText);
// document.write(linkTogether); 
// document.body.appendChild(myText);




// function createElement() {
//   const tag = document.createElement('p');
//   const text = document.createTextNode('Sometimes it\'s really hard to understand some of the tutorials');
//   tag.appendChild(text);
//   document.getEleme ntById('createMe').appendChild(tag);
// }

// createElement();
// const myNan = 9;
// document.write(myNan);  

 
// const person = {
//   firstName: `Aba`,
//   lastName: `Young`,
//   id: `N23701`,
//   country: `Paris`,
//   fullName () {
//   return  `Just call me ${this.firstName} ${this.lastName} \n And my Id number is ${this.id}. I come from ${this.country}`;  

//   }


// }

// const ans = person.fullName();
// document.write(ans);




// function home(num,num2, num3) {
//   return num*num2-num3; 
// }
// const answer = home(7, 2, 4);
// document.write(answer);



// function myWord() {
//   document.write(`Hello, Google how are?`);
// }

// myWord();


// //anonymous function dont have aname
// const afia = function() {
//   console.log(`Hi Afia, how has your weeekend bee?`);
// };

// afia(); 

// const munira = function(x, v, y) {
//   return x%v && y;
// }

// console.log(munira(3,2,90));
















 
// const person = {
//   name:'Martha',
//   age: 24,
//   address: 'AN/052A Awoshie',
//   occupation: 'Student'
// }
// const getResult = person.name;
// const getResult2 = person.age;


// document.write(getResult);
// document.write(getResult2);


// const myObject = {
//   name: 'Wey',
//   age: 25,
//   talk() {
//     return `my name is ${myObject.name} and I will be ${myObject.age} years from now`;
//   }
// }
// console.log(myObject.talk());

// const result = myObject.talk();
// console.log(result); 


// const person = {
//   firstName: 'Lina',
//   middleName: 'Adjoa',
//   lastName: 'Sisi',
//   otherDetails: [ 'Tema', '352/AB', '055 848 833 22']
// };

// const check = 'Linda' in person
//  const persons = person.firstName;
// const inspect = person.hasOwnProperty('Linda')
// const inspect2 = person.hasOwnProperty('middleName');


//  console.log(persons);
// console.log(check);
//  console.log(inspect);
//  console.log(inspect2);

//  //Accessing only keys of object
//  function access() {
//   for(const key of Object.keys(person)) {
//      console.log(key);

//    }

//  }
//  access();


// // //Accessing only the values of the obj
//  function access2() {
//    for(const value of Object.values(person)) {
//      console.log(value);

//    }

//  }
//  access2();
//     //Accessing both key and values 
// function myKeyValues() {
//    for(const [key,value] of Object.entries(person)) {
//   console.log(`${key}: ${value}`);
//    }

//  }
//  myKeyValues();


//JSON  is a light weight data storage formate use for data serialization and configuration.
//it is use to exchange information btn web services.

// the parse() method takes a strings in JSON format and returns a js object.
//e.g
// const person = `{
//   "name": "Onyx",
//   "realName": "Stone",
//   "age": 23
// }`

// const person1 = JSON.parse(person);
// console.log(person1);


//Dates object
// const today = new Date();
// function myDate() {
//   return today.toString();

// }
// myDate();
// console.log(today);

//you can determine the oder of your date

// const dateOder = new Date(2018, 7, 15);
// dateOder.toString()

// console.log(dateOder);


// //Teplate literals in strings. 
// 
//  

// var learn = 5;
// var learn2 = 9;

// if (learn > learn2) {
// 	alert('Sorry,try again!');
// }
// else if (learn ==! learn2) {
// 	prompt('Please type in a number');
// }
// else alert('Choose another number');




// // the this keyword
// const persons = {
//   name: "Pauline",
//   age : 24,
//   sing () {
//     console.log(this);

//   }
// };
// persons.sing();

// const sing = persons.sing.bind(persons);
// // console.log(sing);
// sing();

// //Initializing a function
// const x = function() {

// }

// const output = new x();
// console.log(output);

// // Object.getPrototypeOf(x);

// //Using the constructor function 
// function Box(name, brand, color, size) {
//   this.name = name;
//   this.brand = brand;
//   this.color = color;
//   this.size = size;
//   //Adding a method to the constructor function
//   Box.prototype.smile = function() {
//     return `${this.name} say I'm smiling.`;
//   }
// }







// //Initializing the class function
// const y = class {}

// const answer = new y();
// console.log(answer);

// //using the class function
// class Car {
//   constructor(name, model, brand, doors) {
//     this.name;
//     this.model;
//     this.brand;
//     this.doors;
//     //Adding method to the constructor
//     smyle() {
//       return `${this.name} I am smile`; 
//     }

//   } 

// }

// const car = new Car(`Corola`);
// console.log(car);







// //ES6 Arrow function
// const square = (num, num2) => num*num2;
// console.log(square(4, 5));
 
//  //old function
// const squa = function(num) {
//   return num*num;
// }

// console.log(squa(7));






// const getJob = [
//     {id: 1, isActive: true},
//     {id: 2, isActive: true},
//     {id: 3, isActive: false}
// ]
//ES6
// const myJob = getJob.filter(job => job.isActive);
// console.log(myJob);

//old way of creating a function

// function jobs(job) {
//   return job.isActive;
// }
//  const myJob = getJob.filter(jobs);
//  console.log(myJob);


//Array.map() method is use to render a list of items.

// const colors = [ 'red', 'blue', 'green'];
// colors.map(function(color) {
//   return `<li> ${color} </li>`;
// });


// console.log(getColor







// // global scope $ local... will be back.
// const a = `Hello`;

// function fun() {
// 	let a = `Yes`;
// 	return a;
// }

// const answer = fun();
// console.log(answer);
// console.log(a);


// let ban = `Aba`;
// // document.write(ban);

// let goal = " there's something wer're to discuss.It's today!";

// let goal2 = ban + goal + " " + `Would you want come`;
// document.write(goal2);


// var shoppingDone = false;

// if (shoppingDone === true) {
//   var childsAllowance = 10;
// } else {
//   var childsAllowance = 5;
// }


// var select = document.querySelector('select');
// var para = document.querySelector('p');

// select.addEventListener('change', setWeather);

// function setWeather() {
//   var choice = select.value;

//   if (choice === 'sunny') {
//     para.textContent = 'It is nice and sunny outside today.';
//   } else if (choice === 'rainny') {
//     para.textContent = 'Rain is falling outside.';
//   } else if (choice === 'snowing') {
//     para.textContent = 'The snow is coming down';
//   } else if (choice === 'overcast') {
//     para.textContent = 'It isn\'t raining, but the sky is grey and gloomy.';
//   } else {
//     para.textContent = '';
//   }
//  



//  var myArray = [];
//  myArray[0] = `Valerie`;
//  myArray[1] = `Anas`;
//  myArray[2] = `Pascalina`;
//  myArray[3] = `Esi`;
//  myArray[4] = `Linder`;
//  myArray[5] = `Esther`;
//  myArray[6] = `Martha`;
//  delete(myArray[2]);
// console.log(myArray);





























// template litterals

// let mak = `Hello`.concat( `girls who code `); 
// document.write(mak);


// // Exercise

// function game() {
// 	const question = `What is the name of your pair programer?`;
//     const answer1 = prompt(question);
//     alert(`You answered ${question}`);
// }

// const play = game();
// document.write(play);


// // Arrays.
// const myArray = [];
// let newArr = myArray.push(`Flour:Bread`);
// myArray[1] = `ingredient:sugar`;

// console.log(myArray);













// var a = "I can code";
// alert(a);


// var name = 'Ellah';
// console.log(name.length);

// var num = 2;
// console.log(num);
//  // addition
// var num1 = 2 + 3 ;
// console.log(num1);

// // multipy
// var num2 = 3*4;
// console.log(num2);

// var num3 = 4/7;
// console.log(num3);

// var num4 = 2%6;
// console.log(num4);

// let x = 10;
//  x += 5;
// console.log(x);

// var ban = 5 < 7;
// console.log(ban);

// var e = 3;
// var a = 7;
// var c = e=a;
// console.log(c);






 
























// document.write(name);

// function sayHi() {
// 	document.write("Eeeii, you can code!");
// }

// // Initiate counter
// var counter = 0;

// // Function to increment counter
// function add() {
//   counter += 1;
// }

// // Call add() 3 times
// add();
// add();
// add();
// add();

// // The counter should now be 3
// document.getElementById('increase').innerHTML = "I am :" + counter;


// function app(n) {
// 	var myApp = "Hello, " + n;
// 	var getApp = function() {
// 		var wellApp = myApp;
// 		console.log(myApp);
// 	};
// 	return getApp; 
// }
// var accessApp = app("Ellah");
// var accessApp2 = app("Anita");


// accessApp();
// accessApp2();


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(function(response) {
//     	console.log(response.json());
//     })

//     .catch(function (err) {
//     	console.log("Sorry, something went went");
//     });







// // A function to fetch all data from the API
// function getAll() {
// 	console.log('hello');
// 	fetch('https://jsonplaceholder.typicode.com/todos/')
// 	  .then(response => response.json())
// 	  .then(todos => console.log(todos))
// 	  .catch(err => console.log(err));

// 	  console.log('hello2');
// 	}

// 	getAll();


// 	// A function to fetch a single data from the API
// 	function singleData () {
// 		fetch('https://jsonplaceholder.typicode.com/todos/1')
// 		.then(response => response.json())
// 		.then(todos => console.log(todos[2]))
// 		.catch(err => console.log(err));

// 	}
	



		
// 	// create a function to find the product of two numbers.
// 	function productOf ( x, y ) {
// 		var multiply = x*y;
// 		return multiply
// 	}
// 	var ans = productOf(2, 4);
// 	console.log(ans);


// // 	.catch(err => {
// // 	console.log(err);
// // });
	
// 	function createNode(element) {
// 	return document.createElement(element);
// }

// function append(parent, el) {
// 	return parent.appenChild(el);
// }

// const ul = document.getElementById('myApi'); //getting all items in a list form.
// const url = ('https://randomuser.me/api/?results=10');  //this link gives us what we want to fetch.
// // setting these to const means they are not be changed but remain constant throughout the project.

// fetch(url)
// .then(response => response.json()) //this will transform the raw data to Javascript Obj. Notation. and if successful,
// // it should fetch us the kind of data we want.
// .then(function(data) {
// // console.log(data);
// 	let myApis = data.result; //this gets the results we want.
// 	return myApis.map(function(author) { //maps through the results and for each run the code below. 
// 		let li = createNode('li'),
// 		img = createNode('img'), 
// 		span = createNode('span'); 
// 	    img.src=author.picture.medium;
// 		span.innerHTML = `${author.name.first} ${author.name.last}`;
// 		 append(li, img); // Append all our elements
//       append(li, span);
//       append(ul, li);

// 	})

// })
// .catch(function(err) {
// 	return document.getElementById(error)

// })







    




// let xhr = new XMLHttpRequest();
// xhr.open('Get', 'https://www.programmableweb.com/api/celebrity-bucks', true)
// xhr.onload = function() {
// 	if (this.status === 200) {
// 		// document.getElementById('check').innerHTML = data;
// 		console.log(JSON.parse(this.responseText));
// 	}
// }