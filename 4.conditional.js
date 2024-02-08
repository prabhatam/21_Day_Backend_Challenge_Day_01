// if-else conditional
var num=20

if(num%2==0){
    console.log("even")
}
else{
    console.log("odd")
}

console.log("after if")

// ternary operator -> if-else
num%2==0 ? console.log("even") : console.log("odd")

// nested conditionals
var a=10
if(a>=0){
    if(a>5){
        console.log('a is greater than 0 and 5')
    }
    else{
        console.log('a is greater than 0 but less than 5')
    }
}
else{
    console.log('a is less than 0')
}

// solve the above problem with the help of ternory operator
a>=0 ? (a>5 ? console.log('a is greater than 0 and 5') : console.log('a is greater than 0 but less than 5')) : (console.log('a is less than 0'))


/*
Switch conditional
*/
var fruit = 'apple'
switch(fruit){
    case "apple":
        console.log("its an apple")
        break
    case "mango":
        console.log("its a mango")
        break
    default:
        console.log("not a valid fruit")
}

