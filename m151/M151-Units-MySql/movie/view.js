export function render(movies, ratings, averageRatings) {
  let movieList = '';
  movies.forEach(movie => {
    let movieDetails = `<tr>
    <td>${movie.id}</td>
    <td>${movie.title}</td>
    <td>`;

    const rating = ratings.find(rating => rating.movie === movie.id);
    const averageRatingObject = averageRatings.find(averageRating => averageRating.movie === movie.id);
    const averageRating = averageRatingObject == undefined ? 0 : Math.round(averageRatingObject.averageRating * 100) / 100;
    const userRating = rating == undefined ? 0 : rating.rating;
    let movieRatings = '';
    for (let i = 1; i <= 5; i++) {
      let star = `<a href="/movie/rate/${movie.id}/${i}">` + (userRating >= i ? "★":"☆") + '</a>'
      movieRatings += star;
    }
    movieRatings += averageRating;
    const buttons = `</td>
          <td><a href="/movie/delete/${movie.id}">löschen</a></td>
          <td><a href="/movie/form/${movie.id}">bearbeiten</a></td> 
        </tr>`;
    movieList +=  movieDetails + movieRatings + buttons;
  });

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Movie list</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
  <a href="/logout">abmelden</a>
    <table>
      <thead><tr><th>Id</th><th>Title</th><th></th><th></th></tr></thead>
      <tbody>
        ${movieList}
      </tbody>
    </table>
    <a href="/movie/form">neu</a>
  </body>
  </html>
    `;
      
}
