var > we can redeclare and reassign
let > we cannot redeclare but can reassign
const > we connot redeclare nor reassign


var a = 10

var a >>>>>> declare
a = 10 >>> assignment

> var a = 10
undefined
> a
10
> var a = 11
undefined
> a = 11
11
> a = 12
12
> let b = 20
undefined
> let b = 21
Uncaught SyntaxError: Identifier 'b' has already been declared
> b = 21
21
> const c = 10
undefined
> c
10
> const c = 11
Uncaught SyntaxError: Identifier 'c' has already been declared
> c = 11
Uncaught TypeError: Assignment to constant variable.