//JS OOP
//1. TEMEL OOP//

// let val;

// let person =
// {
//     name : 'Onur',
//     yearOfBirth : 1990
// };

// val = person;

// console.log(typeof val);
// console.log(val);


//////////////////////////////////////////////////////////////////////////////////////////////////////


//2. CONSTRUCTOR OOP// 

// function Person(name, yearOfBirth) //Person fonksiyonunun içine 'this' komut satırı ile obje üretiriz.
// {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     //console.log(this);
// }

// let onur = new Person('Onur', 1990); //Constructor oluşturduk.
// console.log(onur); //YA DA 2.YÖNTEM


///////////////////////////////////////////////////////////////////////////////////////////////////////


//3. PROTOTYPE OOP//

// let Person = function (name, yearOfBirth)
// {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
// }

// Person.prototype.calculateAge = function()
// {
//     return 2022-this.yearOfBirth;
// }
// let Onur = new Person ('Onur', 1990);
// console.log(Onur);


//////////////////////////////////////////////////////////////////////////////////////////////////////////


//4. OBJECT CREATE OOP//

// let person =
// {
//     calculateAge : function()
//     {
//         return 2022-this.yearOfBirth;
//     }
// }
// let onur = Object.create(person);
// onur.name = 'onur'; //Bu satırla birlikte istersek onur objesinin içine değer atabiliriz
// console.log(onur);

///////////////////////////////////////////////////////////////////////////////////////////////////////////


//5. PROTYPE INHERITANCE OOP//

// let Person = function(name,yearOfBirth)
// {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
// }
// Person.prototype.calculateAge = function()
// {
//     return 2020-this.yearOfBirth;
// }
// let Engineer = function(name, yearOfBirth, phoneNumber)
// {
//     Person.call(this,name,yearOfBirth);
//     this.phoneNumber = phoneNumber;
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//6. BUİLT in Constructor

//a) string constructor

// var str1 = 'onur';
// var str2 = new String('onur');

// console.log(str1);
// console.log(str2); //çıktı farklı olur

// //b) Boolen constructror

// var bool1 = false;
// var bool2 = new Boolean(true);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//7.TRY/CATCH 
// var person =
// {
//     name : 'onur';
// }

// try
// {
//     console.log(person.name);
//     if(!person.age)
//     {
//         throw new Error('person has no age');
//     }
//     console.log(newFunction());  
  
// }
// catch(e)
// {
//     console.log(e);
// }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//8.ARROW FONKSIYONLARI

//parameters
//es5

// let paramE5s5 = function (a,b)
// {
//     return a*b;
// }
// console.log(paramE5s5(2,3));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//9.SPREAD OPERATOR(TOPLAMA)

// function sum(a,b,c)
// {
//     return a+b+c;
// }
// console.log(sum(10,15,20));

// let numbers = [10,15,20];
// //es5
// console.log(sum.apply(null, numbers));

// //es6
// console.log(sum(...numbers));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//10. MAP METHOD

// let myMap = new Map();

// console.log(typeof myMap);

// let key1 = 'Onur';
// let key2 = {a:2,b:3};

// myMap.set(key1,'X');
// myMap.set(key2.'Y');

// console.log(myMap(key,value));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////











