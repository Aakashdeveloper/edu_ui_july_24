let b = {}

var movieName = "Avengers"
var movieRating = 4.5
var movieType = "Action"

var movieName1 = "Jab we Met"
var movieRating1 = 4.8
var movieType1 = "Romantic"

let movie = {
    name:"Avengers",
    rating:4.5,
    type:'Action'
}
undefined
movie.name
'Avengers'
movie.rating
4.5
movie.type
'Action'
movie['name']
'Avengers'
movie.ind = "Hollywood"
'Hollywood'
movie
{name: 'Avengers', rating: 4.5, type: 'Action', ind: 'Hollywood'}
movie.rating = 4.8
4.8
delete movie.type
true
movie
{name: 'Avengers', rating: 4.8, ind: 'Hollywood'}


JSON > JavaScript Object Notation
Array of Object

let movies = [
    {
        name:"Avengers",
        rating:4.5,
        type:'Action'
    },
    {
        name:"Jab We Met",
        rating:4.8,
        type:'Romantic'
    }
]

movies[1].name
'Jab We Met'