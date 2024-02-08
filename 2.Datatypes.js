/*
Primitives
*/

//string
var name = "prabhat"  // we can use single or double quotes
console.log(name)
console.log(typeof(name))    // it tells you what is the datatype of name


// Number
var age=19
var x=1.4
console.log(age)
console.log(typeof(age))


// Bigint
var big_num = 123    // big is used for defining big numbers
console.log(big_num)
console.log(typeof(big_num))
console.log(typeof(NaN))  //NaN means not a number but its datatype is also a number.


//null
console.log(typeof(null))    // datatype is object

var kudos
console.log(typeof kudos)   // it shows undefined

/*
What is the difference between undefined/null ?
Undefined:- you have defined a variable but not assigned any value to it.
Null:- Purposefully don`t want to assign any value.
*/


// Boolean
console.log(typeof(true))


// Symbol
var s1 = Symbol()   // it is a constructor, symbol object

/*
Non-primitive datatype
1.object
*/

// object
var person = {         // objects are defined in the form of (key:value) pair
    name: "prabht",    // here it is needed to put the comma otherwise you will get the error
    age: 19,
    hobby: "cricket"
}
console.log(person)

