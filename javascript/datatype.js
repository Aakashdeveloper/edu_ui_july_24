es5 > Ecma script 5
es6 > Ecma Script 6

String > "hiii" 'hey' '10' "20" 'true' "false" `hii` `10`
Number >  12  324242523543 35.353  .55
Boolean > true false


//es5
var a = "hiii"
var b = 10
var c = true

typeof(a)
'string'
typeof(b)
'number'
typeof(c)
'boolean'
var d = "10"
undefined
typeof(d)
'string'
var e = 10.11
undefined
typeof(e)
'number'


var a = 10
var b = 20

a+b
30
a-b
-10
a*b
200
a/b
0.5
b-a
10
a-b
-10
4%2
0
4%3
1
5%3
2
2%3
2
6%8


var a = "Hiii"
var b = "javascript"

a+b
'Hiiijavascript'
a-b
NaN (not a number)
a*b
NaN
a/b
NaN

"hii" +1
'hii1'
10+"hii"
'10hii'

string+string = string
string+number = string
number+string = string
number+number = number

"10"+20+30
"1020"+30
"102030"


10+"20"+30
"1020"+30
"102030"

10+20+"30"
30+"30"
"3030"


"10"+20+30-1
102029
10+"20"+30-1
102029
10+20+"30"-1
3029

"hii"-1
NaN
"10a"-1
NaN
2*"c23"
NaN
"10"-2
8
2*"23"
46
"41"/"11"
3.727272727272727
"41"/"11a"
NaN
"10"+"10"
'1010'

