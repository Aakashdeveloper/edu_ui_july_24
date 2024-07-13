> map is use to iterate over th array of element
> it always return the same length of output as input array
> it is use to apply the logics

var a = [4,5,6,2,23,31,34,36,48,9,11]
a.map((data) => {return data*2})
[8, 10, 12, 4, 46, 62, 68, 72, 96, 18, 22]



> filter is use to filterout the output
> it may or may not return same length  of output
> filter only return value for which condition is true

a.filter((data) => {return data>20})
(5) [23, 31, 34, 36, 48]


a.map((data) => {return data>20})
[false, false, false, false, true, true, true, true, true, false, false]