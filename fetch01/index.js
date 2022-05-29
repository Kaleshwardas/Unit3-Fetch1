
function serachMovies(){
    let title=document.getElementById("title").value
    let url=`https://www.omdbapi.com/?t=${title}&page=1&apikey=6ca94841`
    fetch(url).then(function(res){
        return res.json();
    }).then(function(res){
        diplayMovies(res)
        console.log(res)
    }).catch(function(err){
        console.log(err)
        displayError(err)
    })
}

function  diplayMovies(movie){
   
        let moviesImg=document.createElement("div")
        let MoviesData=document.createElement("div")
        let image=document.createElement('img')
        image.src=movie.Poster;
        let  movieName=document.createElement("h2")
        movieName.innerText=movie.Title;
        let Released=document.createElement("p")
        Released.innerHTML="Released:   "+" "+movie.Released;
        let Actor=document.createElement("p")
        Actor.innerHTML="Actors:"+" "+movie.Actors
        let Language=document.createElement("h5")
        Language.innerHTML="Language:"+" "+movie.Language;
        let plot=document.createElement("p")
        plot.innerHTML="PlotL:"+" "+movie.Plot;
        let Ratings=document.createElement("h3")
        Ratings.innerHTML="Ratings:"+" "+movie.Ratings[0].Value;
        if(movie.Ratings[0].Value>="8.0/10"){
            let Ratings=document.createElement("h3")
            Ratings.innerHTML="Ratings:"+" "+"Movie is Recommended";
            MoviesData.append(movieName,Released,Actor,Language,plot,Ratings)
        }
        else{
            let Ratings=document.createElement("h3")
            Ratings.innerHTML="Ratings:"+" "+movie.Ratings[0].Value;
            MoviesData.append(movieName,Released,Actor,Language,plot,Ratings)
        }
        moviesImg.append(image)
        // MoviesData.append(movieName,Released,Actor,Language,plot,Ratings)
        document.getElementById("container").append(moviesImg,MoviesData)
  

}
function displayError(res){
    let moviesImg=document.createElement("div")
    let MoviesData=document.createElement("div")
    let image=document.createElement('img')
    image.src="https://bitsofco.de/content/images/2018/12/broken-1.png"
    let  movieName=document.createElement("h2")
    movieName.innerText="Movie Does Not Found..";
    moviesImg.append(image)
    MoviesData.append(movieName)
    document.getElementById("container").append(moviesImg,MoviesData)

}