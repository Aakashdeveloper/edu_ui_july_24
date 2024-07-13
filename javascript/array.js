Array is a collection of homogeneous  as well as heterogeneous data type


let a = [1,2,3,4,5,33,543,23,52] //Array of number
let b = ["A","sdvdv","few","dfvew"] // Array of string
let c = [true,false,false,true] // Array of boolean

let d = [3,4,3,"xvx","dvv",432,4,true,"dv",3]

let city = ["Delhi","Amsterdam","Helsinki"]
undefined
city.length
3
city[0]
'Delhi'
city.push('London')
4
city
(4) ['Delhi', 'Amsterdam', 'Helsinki', 'London']
city.push('Mumbai')
5
city
(5) ['Delhi', 'Amsterdam', 'Helsinki', 'London', 'Mumbai']
city.pop()
'Mumbai'

['Delhi', 'Amsterdam', 'Helsinki', 'London']

city.pop(2)
'London'

city.unshift('Hongkong')
4
city
(4) ['Hongkong', 'Delhi', 'Amsterdam', 'Helsinki']
city.unshift('Boston')
5
city
(5) ['Boston', 'Hongkong', 'Delhi', 'Amsterdam', 'Helsinki']
city.shift(0)
'Boston'city.unshift('Hongkong')
4
city
(4) ['Hongkong', 'Delhi', 'Amsterdam', 'Helsinki']
city.unshift('Boston')
5
city
(5) ['Boston', 'Hongkong', 'Delhi', 'Amsterdam', 'Helsinki']
city.shift(0)
'Boston'


push > Add in the end of Array
unshift > Add in begining of Array
pop > Remove the last value
shift > Remove the first value


splice(index,deleteCount,values)

// insert on index 2 and do not remove

let city = ['Boston', 'Hongkong', 'Delhi', 'Amsterdam', 'Helsinki']
city.splice(2,0,'Indore','London')

 ['Boston', 'Hongkong', 'Indore', 'London', 'Delhi', 'Amsterdam', 'Helsinki']

// on index 3 remove 1 value
city.splice(3,1)
['London']
city
(6) ['Boston', 'Hongkong', 'Indore', 'Delhi', 'Amsterdam', 'Helsinki']


// on index 4 remove 1 value and add 2 values
city.splice(4,1,'Venice','Pune')
['Amsterdam']
city
(7) ['Boston', 'Hongkong', 'Indore', 'Delhi', 'Venice', 'Pune', 'Helsinki']
city

 ['Boston', 'Hongkong', 'Indore', 'Delhi', 'Venice', 'Pune', 'Helsinki']
city.indexOf('Moscow')
-1
city.indexOf('Sydeny')
-1
city.indexOf('Boston')
0
city.indexOf('Delhi')
3


