// all the conditional operator will return boolean output
= // assignment
== //compare the data
=== // compare data and datatype

var a = 10    // assignment
var b = "10"

a == b  //compare the data
true
a === b // compare the data & datatype
false

var c = 20
a == c
false

var a = "Hii"
var b = "hi"
a == b
false

10 >5
true
10 <5

10 != 5
true
10 >= 5
true

10 => 5(Not allowed)

10 <= 5
false


// negation ///
var a = true
!a
false

var a = false
!a
true



var a = 1
undefined
!a
false
var a = 0
undefined
!a
true
var a = "hii"
undefined
!a
false
var a = -1
undefined
!a
false


truthy > any numeric value except 0 weather +ve or -ve,any String, true
falsy > 0, false, null,undefined