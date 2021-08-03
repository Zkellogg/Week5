const topDiv = document.getElementById("topDiv")
const bottomDiv = document.getElementById("bottomDiv")
const movieInfoId = ""


function showMovieDetails(btn){
    const movieID = btn.getAttribute('data-movieId')
     
    let detailRequest = new XMLHttpRequest()
    detailRequest.open('GET', 'https://www.omdbapi.com/?i='+movieID+'&apikey=294c656c')
    detailRequest.send()

    detailRequest.addEventListener('load', function(){

        const details = JSON.parse(this.responseText)
        detailsArr = []
        detailsArr.push(details)
        
        const detailList = detailsArr.map(function(detail){
            const detailsLI = `
            <ul id='detailsUL'>
            <li><img id='moviePoster' src='${detail.Poster}'/></li>
            <li><p>Title: </p>${detail.Title}</li>
            <li><p>Year Released: </p>${detail.Year}</li>
            <li><p>Actors: </p>${detail.Actors}</li>
            <li><p>BoxOffice: </p>${detail.BoxOffice}
            </ul>
            `
            return detailsLI
        })
        bottomDiv.innerHTML = detailList
        

    
     
})
}



let request = new XMLHttpRequest()
request.open('GET', 'http://www.omdbapi.com/?s=batman&apikey=294c656c')
request.send()

request.addEventListener('load', function(){
const movies = JSON.parse(this.responseText)

const moviesArr = movies.Search
const movieItems = moviesArr.map(function(movie){
    
   const movieSelection = `<ul>
        <li><img id='moviePoster' src='${movie.Poster}'/></li>
        <li>${movie.Title}</li>
        <button data-movieId = '${movie.imdbID}' onClick = "showMovieDetails(this)">Show Details</button>
   
   </ul>`
 
   return movieSelection
})
topDiv.innerHTML = movieItems.join("")



})




