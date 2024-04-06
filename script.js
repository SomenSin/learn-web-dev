//-----------------------Question 1-----------------------
console.log("-----------------------Question 1-----------------------");
let arr1 = [1,2,3,4,5,6,7,8,9]
let newArr = arr1.map( e => e*e);
console.log(newArr);

//-----------------------Question 2-----------------------
console.log("-----------------------Question 2-----------------------");
function getGrade(score) {
    return  (score>=90)? "A":
            (score>=80)? "B": 
            (score>=70)? "C": 
            (score>=60)? "D": 
            (score>=50)? "E": "F";
}
let ar = getGrade(69);
console.log(ar)


//-----------------------Question 3-----------------------
console.log("-----------------------Question 3-----------------------");
car = {
    company: "Maruti Suzuki",
    model: "Aulto 800",
    year: 2000
}
function changeYear(yr) {
    car["year"] = yr;
}
function printCarInfo() {
    let { model, year } = car;
    console.log("Car Model:", model);
    console.log("Car Year:", year);
}
console.log(car["year"]);
changeYear(2002);
console.log(car["year"]);

printCarInfo();


//-----------------------Qustion 4-----------------------
console.log("-----------------------Question 4-----------------------");
let arr2 = [1,2,3,4,5,6,7,8,9];
let newArr1 = arr2.filter( ele => isPrime(ele))

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
}
console.log(newArr1);


//-----------------------Question 5-----------------------
console.log("-----------------------Question 5-----------------------");
// Map-----------

// Use Case: Transforming elements of an array into another form.
// Example: Converting an array of numbers to an array of their squares.

const numbers2 = [1, 2, 3, 4, 5];
const squaredNumbers = numbers2.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// Use Case: Formatting data for display.
// Example: Converting an array of objects to an array of formatted strings.

const students1 = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 25 }
];
const formattedNames = students1.map(student => `${student.name} (${student.age} years old)`);
console.log(formattedNames); 
// Output: ["Alice (20 years old)", "Bob (22 years old)", "Charlie (25 years old)"]


// Filter-----------

// Use Case: Filtering elements of an array based on a condition.
// Example: Filtering out even numbers from an array.

const numbers3 = [1, 2, 3, 4, 5];
const oddNumbers = numbers3.filter(num => num % 2 !== 0);
console.log(oddNumbers); // Output: [1, 3, 5]

// Use Case: Filtering objects based on a specific property.
// Example: Filtering students who are older than 21 years old.

const students = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 25 }
];
const adults = students.filter(student => student.age > 21);
console.log(adults); // Output: [{ name: 'Bob', age: 22 }, { name: 'Charlie', age: 25 }]


// Reduce-------------

// Use Case: Computing a single value from an array.
// Example: Calculating the sum of all elements in an array.

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15

// Use Case: Flattening an array of arrays into a single array.
// Example: Concatenating multiple arrays into one.

const arrays = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = arrays.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]



//----------------------- Question 6 -----------------------
console.log("-----------------------Question 6-----------------------");
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
console.log("Will print at last because its async js");

fetchData();


//----------------------- Question 7-----------------------
console.log("-----------------------Question 7-----------------------");
const person = {
    name: "John Doe",
    address: {
      street: "123 Main St",
      city: "Anytown",
      country: "USA"
    },
    // contact property is missing intentionally
  };
  
  // Using optional chaining to safely access the phone number
  const phoneNumber = person.contact?.phone;
  
  console.log("Phone Number:", phoneNumber); // Output: undefined
  