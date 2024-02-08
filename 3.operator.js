/*
---------------Operator----------------
*/

// assignment operator(=)
var name = "prabhat"     // = is called the assignment operator

// arithmetic operator
console.log(4+6)    //addition
console.log(4*5)    //multiplication
console.log(4**5)   // exponential(**)
console.log(9345809 % 76)   // ampersend is used to get the remainder


//----------increment & decrement------------
var i=1
console.log(i++)    //output is 1        //  i++   ===> i=i+1
console.log(i)      // output is 2

var k=5
console.log(++k)     // output is 6      //++k ==> k=k+1
console.log(k)       // output is 6
/*
post-increment   i++  ===>  it firstly prints the value of i then increments i
pre-increment    ++i  ===>  it firstly increments the value of i then prints the value of i
*/


// Relational operator

console.log(1==2)      //equality
console.log(3=='3')    //double equal sign only checks the value, it does not compare the datatypes.
console.log(3===3)     // triple equal sign checks the value as well as data 


console.log(1!='1')    // checks inequality
console.log(1!=='1')   // strict inequality

//  Comparitive operator
console.log(3>=4)

/*
Logical operators
OR(||):- it is always true, except only false when both the values being compared are false.
AND(&&):- it is always flase, except only true when boht the values are true.
XOR(^):- it is true if both values are opposite, and false when both values are same.
*/
console.log(3<4 && true)
console.log(3>4 || true)
console.log(true ^ true)


// Bitwise operator (in this, number gets converted into bits and then they are compared)
// Bitwise AND(&):- it converts the number into bits then performs and operation
console.log(10 & 6)  //(o/p is 2) 10=1010, 6=0110, when perform and operation bitwise, you will get ans=2=0010
console.log(10|6)

