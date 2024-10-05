//Задание 1: Определение функций (Function Declaration)

function greet(name) {
    alert('Привет, ' + name + "!");
}
greet("Иван");

//Задание 2: Function Expression

function multiply(a, b) {
    return a*b;
}
let result = multiply(3, 4);
alert( result );

//Задание 3: Анонимные функции

(function () {
    console.log("это анонимная функция");
})();

//Задание 4: Самовызывающаяся функция (IIFE)

Создайте самовызывающуюся функцию, 
которая выводит в консоль "IIFE выполнена".

(function() {
        console.log('IIFE выполнена'); 
})();

//Задание 5: Вложенные функции

Создайте функцию outer , которая внутри содержит функцию inner . 
Функция inner должна возвращать строку "Внутренняя функция".
Функция outer должна вызывать функцию inner и возвращать её результат.

       
function outer() {

     return function inner(){ 
        return "Внутренняя функция";
     }; 
}
let message = outer(); 
console.log(message());

//Задание 6: Привязка функции к контексту (bind)

let person = {
    name: "Юлия",
    sayName (){
        alert(`${this.name}`);
    }
};
let sayName = person.sayName.bind(person);
person.sayName();

//Задание 7: Замыкания

function counter() {
    let count = 0;

    return function () {
    console.log(++count);
        
    };
}
let count = counter();
count();
count();

//Задание 8: Передача функции в качестве аргумента

function multiply (a,b){
    let x = a*b;
    return x;
}
function execute(multiply,a,b) {
    let x = multiply(a,b);
    return x;
}
execute(multiply, 2, 5);












