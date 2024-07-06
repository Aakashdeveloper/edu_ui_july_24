true
false

true+true
true+false

true+true
2
true+false
1

true is considered as 1
false is considered as 0


10+true
11
10/false
Infinity
"10"+true
'10true'
"10"-true
9
"true"+"true"
'truetrue'


var a = "10"
var b = "20"

a+b
'1020'




var a = "10"
var b = "20"

parseInt(a)
10
parseInt(a)+parseInt(b)
30
var a = "10.77"
var b = "20.9"

undefined
parseInt(a)+parseInt(b)
30
parseFloat(a)
10.77
parseFloat(a)+parseFloat(b)
31.669999999999998


var a = "10a5"
var b = "20b11"
undefined
parseInt(a)+parseInt(b)
30
var a = "a5"
var b = "20b11"
undefined
parseInt(a)
NaN

var a = "10.77"
var b = "20.9"

Number(a)+Number(b)
31.669999999999998
var a = "10a5"
var b = "20b11"
undefined
Number(a)+Number(b)
NaN