let movies = require('./movies');

let moviesDH = {
    listMovies: () => {
        movies.forEach((movie) => {
            console.log(`${movie.id} - ${movie.title}`);
        });
    },
    searchMovie: (id) => {
        let searchResult = movies.find((movie) => movie.id === id);
        if(searchResult === undefined){
            return null
        }
        else{
            return(searchResult);
        }
    },
    searchMovieByGenre: function(genre){
        let searchGenre = movies.filter((movie) => movie.genre == genre);
            if(genre == undefined){
                return null
            }
            else{
                return (searchGenre);
            }
    },
    totalPrice: function(){
        let totalPrice = movies.reduce((acum, movie) => acum + movie.price, 0);
        return totalPrice;
    },
    ChangeMovieGenre: function(id ,b) {
        let movie = moviesDH.searchMovie(id);
        movie.genre = b;
        return movie
    }
};


