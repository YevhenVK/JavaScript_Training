// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;
//   const credits = customerCredits - totalPrice;
//     if (customerCredits < totalPrice) {
//       message = "Insufficient funds!";
//     } else { 
//       message = `You ordered ${orderedQuantity} droids, you have ${credits} credits left.`;
//     }
//   // Change code above this line
//   return message;
// }


// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };


// apartment.area = 60;
// apartment.room = 3;
// apartment.location {
//   location.country = "Jamaica";
//   location.city = "Kingston";
// }


// Change code below this line


// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// // Передаём инлайн функцию greet как колбэк
// registerGuest("Mango", function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбэк
// registerGuest("Poly", function notify(name) {
//   console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });

/////

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
// 	callback(pizzaName);
// }

// makePizza(" ", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
// });

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese");

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, );

// const averageScore = totalScore / students.length;



//////////
// const objC = {
//   z: 5,
// };
// console.log('objC', objC);

// const objB = Object.create(objC);
// objB.y = 2;

// console.log('objB', objB);

// const objA = Object.create(objB);
// objA.x = 1;

// // // console.log(objC.hasOwnProperty('z'));
// // console.log(objB.y);
// // console.log(objB.z);

// console.log('objA', objA);




// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// getWage(baseSalary, overtime, rate);


///////////////////
// const Car = function ({ brand, model, price } = {}) {
  
//   this.brand = brand;
//   this.model = model;
//   this.price = price;

//   // this.changePrice = function (newPrice) {
//   //   this.price = newPrice;
//   // };
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// const myCar = new Car({
//   brand: "Audi",
//   model: 'Q3',
//   price: 35000,
// });
// console.log(myCar);

// myCar.changePrice(10000);

// const myCar2 = new Car({
//   brand: "BMW",
//   model: 'X6',
//   price: 50000,
// });
// console.log(myCar2);

// const myCar3 = new Car({
//   brand: "Audi",
//   model: 'A6',
//   price: 65000,
// });
// console.log(myCar3);

///////////////////////



// class Car {
//   // Change code below this line
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   // Change code above this line
// }


////////////////////////////

const horgvarts = {
    griffindor: [
        {name: "Harry", points: 15},
        {name: "Hermiona", points: 16}, 
        {name: "Ron", points: 14}],
    slizerin: [
        {name: "Goyl", points: 25},
        {name: "Draco", points: 36}, 
        {name: "Crabbe", points: 14}],

    isOnFaculty(faculty){
        const keys = Object.keys(horgvarts);
        //console.log(keys)

        for (const key of keys){
            if(key === faculty){
                //console.log(key);
                const searchName = this[key];
                //console.log(searchName);
                const fff = searchName.forEach(student => console.log(student.name));
                //console.log(fff)
            }
            } 
        },
        
    totalPoint(){
        const totalPoint = this.griffindor.reduce((total, point) => 
         total + point.points, 0)
         //console.log(totalPoint);
    }
}

horgvarts.isOnFaculty("slizerin");
horgvarts.totalPoint("griffindor");