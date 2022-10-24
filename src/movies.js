// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    
return moviesArray.map(e => e.director)


}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

if (!moviesArray.length){
    return 0;
}

    let dramaMovies = moviesArray.filter(e => e.genre.includes('Drama') && e.director == 'Steven Spielberg')

    return dramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
if (!moviesArray.length){
return 0;
}
    let movieScores = moviesArray.reduce((sum , e) => {
        if(!e.score){
            return sum
        }
        return sum + e.score
    }, 0)

  let averageEquals = movieScores/moviesArray.length;
  let roundedAvg = averageEquals.toFixed(2);

  return +(roundedAvg)
    // return Number((movieScores / moviesArray.length).toFixed(2));
    

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    let dramaMovies = moviesArray.filter(e => e.genre.includes('Drama'))

        return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    let clone = [...moviesArray]
    return clone.sort((year1, year2) =>{
        return year1.year - year2.year || year1.title.localeCompare(year2.title)
    }
    )
return clone 
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray.map(e => e.title).sort((a,b) => a.localeCompare(b)).slice(0,20)

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
