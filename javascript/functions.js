var a = 10;
var b = 20;
a+b
30

keyword nameoffunction(take paramaters){
    return value
}


function add(a,b){
    return a+b
}

add(1,2)
3
add(3,4)
7
add(9,11)
20
add("hii","Javascript")
'hiiJavascript'

function isEven(userInput){
    let out;
    if(userInput%2 == 0){
        out = `Number ${userInput} is even`
    }else{
        out = `Number ${userInput} is odd`
    }
    return out
}

isEven(4)
'Number 4 is even'
isEven(5)
'Number 5 is odd'
isEven(11)
'Number 11 is odd'
isEven(12)
'Number 12 is even'

function add(a,b){
    return a+b
}
undefined
add(1,2,3)
3
add(1,2,7)
3
add(1)
NaN

////////////
let add = (a,b) => {return a+b}
add(1,2)
3

