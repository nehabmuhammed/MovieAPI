async function getMovie() {
    const movieId = document.getElementById('movie').value;

    const resp = await fetch('movies.json');
    const movies = await resp.json();
    
    const movie = movies.find(m => m.name === String(movieId));
    console.log(movie);
    document.getElementById('name').textContent = movie.name;
    document.getElementById('year').textContent = movie.year;
    document.getElementById('director').textContent = movie.director;
    document.getElementById('actors').textContent = movie.actors;

}
getMovie();