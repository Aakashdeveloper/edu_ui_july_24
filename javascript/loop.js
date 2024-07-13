/// it help to iterate over the data as well as print the series
for(start,condition, operation)


for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var city = ['Boston', 'Hongkong', 'Indore', 'Delhi', 'Venice', 'Pune', 'Helsinki']
undefined
for(i=0;i<city.length;i++){ console.log(city[i])}
VM2517:1 Boston
VM2517:1 Hongkong
VM2517:1 Indore
VM2517:1 Delhi
VM2517:1 Venice
VM2517:1 Pune
VM2517:1 Helsinki


/// 
var i = 10
while(i<5){
    console.log(i);
    i++
}

////
var i = 10
do{
    console.log(i);
    i++
}
while(i<5)





var city = ['Boston', 'Hongkong', 'Indore', 'Delhi', 'Venice', 'Pune', 'Helsinki']
for(mycity of city){
    console.log(mycity)
}