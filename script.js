
let name = "John";
const age = 30;


document.getElementById('output').innerHTML = `Nama: ${name}, Umur: ${age}<br>`;


let fruits = ["Apple", "Banana", "Mango"];


for (let i = 0; i < fruits.length; i++) {
    document.getElementById('output').innerHTML += fruits[i] + "<br>";
}


let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};


document.getElementById('output').innerHTML += `First Name: ${person.firstName}<br>`;
document.getElementById('output').innerHTML += `Last Name: ${person.lastName}<br>`;


function cekNilai() {
 
    let userValue = parseInt(document.getElementById('userInput').value);

    
    if (userValue > 10) {
        document.getElementById('output').innerHTML += "Nilai lebih besar dari 10<br>";
    } else if (userValue === 10) {
        document.getElementById('output').innerHTML += "Nilai sama dengan 10<br>";
    } else {
        document.getElementById('output').innerHTML += "Nilai kurang dari 10<br>";
    }

    
    for (let i = 1; i <= userValue; i++) {
        document.getElementById('output').innerHTML += i + "<br>";
    }
}


function greet(name) {
    return `Hello, ${name}`;
}


document.getElementById('output').innerHTML += greet('Alice') + "<br>";
document.getElementById('output').innerHTML += greet('Bob') + "<br>";


function calculateSquare(number) {
    return number * number;
}


document.getElementById('output').innerHTML += `4 squared is ${calculateSquare(4)}<br>`;
document.getElementById('output').innerHTML += `7 squared is ${calculateSquare(7)}<br>`;


const addNumbers = (a, b) => a + b;


document.getElementById('output').innerHTML += `3 + 5 = ${addNumbers(3, 5)}<br>`;
document.getElementById('output').innerHTML += `10 + 15 = ${addNumbers(10, 15)}<br>`;


let students = ["Alice", "Bob", "Charlie"];


students.push("David");


students.forEach(function(student) {
    document.getElementById('output').innerHTML += `Student: ${student}<br>`;
});


let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};


for (let property in car) {
    document.getElementById('output').innerHTML += `${property}: ${car[property]}<br>`;
}


let cars = [
    {brand: "Toyota", model: "Corolla", year: 2020},
    {brand: "Honda", model: "Civic", year: 2019},
    {brand: "Ford", model: "Focus", year: 2018}
];


cars.forEach(function(car) {
    document.getElementById('output').innerHTML += `Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}<br>`;
});
