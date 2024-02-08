//    for loop
for(var i=0; i<10; i++){
    console.log("hello")
}

// while loop
let k=0;
while(k<10){
    console.log("hello");
    k++;
}

//  if you know how many times looping then go for loop
//  if you know the condition then go for while loop


// lets see continue and break

for(var i=1; i<50; i++){
    if(i%2!=0){
        continue;     // if it hits continue, any code after this will not execute and will go to next loop
    }
    console.log(i)
}

for(var j=0; j<10; j++){
    if(j==5){
        break     // when break occurs then loop gets terminated.
    }
    console.log("a")
}

// note:  whenever multiple loops are there, break and continue will affect only immediate outer loop.