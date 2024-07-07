if(condition){

}else{

}

var a = 10;
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}

VM64:4 Number 10 is even
undefined

var a = 11;
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}

VM68:6 Number 11 is odd


var a = 23;
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else if(a%3==0){
    console.log(`Number ${a} is divisble by 3`)
}else{
    console.log(`Number ${a} is odd`)
}


//////////single line if else(Ternary Operator)
condition ? if condition is true : if condition is false

var a = 10
a > 10 ? "Hii":"Bie"
'Bie'

var a = 11
a > 10 ? "Hii":"Bie"
'Hii'

var a = 10
a > 10 ? a+1:a-1
9


var a = 9
a > 10 ? a+1:a-1
8


var a = 11
a > 10 ? a+1:a-1
12