var browserDiv = document.getElementById('main');

var data_div = document.getElementById("movieDetails");

function searchForMovie() {
    var movieName = document.getElementById("inputBox").value;
    // console.log(movieName);

    fetch(`https://www.omdbapi.com/?apikey=33e2cec9&t=${movieName}&type=movie`).then(function (res) {
        res.json().then(function (data) {
            if (data.Error == undefined) {
                console.log(data);
                browserDiv.innerHTML = "";
                data_div.innerHTML = "";

                var poster = document.createElement("img");
                poster.src = data.Poster;

                var title = document.createElement("div");
                title.innerHTML = `<span>Title: </span>${data.Title}`;

                var year = document.createElement("div");
                year.innerHTML = `<span>Year: </span>${data.Year}`;

                var director = document.createElement("div");
                director.innerHTML = `<span>Director: </span>${data.Director}`;

                var genre = document.createElement("div");
                genre.innerHTML = `<span>Genre: </span>${data.Genre}`;

                var rating = document.createElement("div");
                rating.innerHTML = `<span>Rating: </span>${data.imdbRating}`;

                var btn = document.createElement("button");
                btn.setAttribute("id", "crossBtn");
                btn.innerHTML = "X"
                btn.addEventListener("click", function () {
                    window.location.href = "movieSearchEngine.html"
                });

                if (data.imdbRating > 8.5) {
                    var recommended = document.createElement("span");
                    recommended.innerHTML = "Recommended";
                    recommended.setAttribute("id", "recommended");
            
                    data_div.append(btn,recommended, poster, title, year, director, genre, rating);
            
                } else {
                    data_div.append(btn, poster, title, year, director, genre, rating);
                }
            } else {
                browserDiv.innerHTML = "";

                var notFound = document.createElement("img");
                notFound.setAttribute("id", "notFound");
                notFound.src = "https://cdn.dribbble.com/users/1033824/screenshots/5905597/404-dribbble.gif";

                var btn = document.createElement("button");
                btn.setAttribute("id", "crossBtn2");
                btn.innerHTML = "X"
                btn.addEventListener("click", function () {
                    window.location.href = "movieSearchEngine.html"
                });

                browserDiv.append(btn, notFound);
                                                
            }
        })
    })
        
    .catch(function (err) {
        console.log(err);
    })
}

//http://www.omdbapi.com/?apikey=[yourkey]/?t=avengers

//http://www.omdbapi.com/?i=tt3896198&apikey=33e2cec9