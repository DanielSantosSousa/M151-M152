import { getAll, remove, get, save } from './model.js';
import { getUserRatings, getRating, modifyRating, getAverageRatings} from '../rating/model.js';
import { render } from './view.js';
import { render as form } from './form.js';

export async function listAction(request, response) {
  let movies = await getAll(request.user.id);
  let userRatings = await getUserRatings(request.user.id);
  let averageRatings = await getAverageRatings();
  const body = render(movies, userRatings, averageRatings);
  response.send(body);
}

export async function removeAction(request, response) {
  const id = parseInt(request.params.id, 10);
  await remove(id);
  response.redirect(request.baseUrl);
}

export async function formAction(request, response) {
  let movie = { id: '', title: '', year: '' };

  if (request.params.id) {
    movie = await get(parseInt(request.params.id, 10));
  }

  console.log(movie);

  const body = form(movie);
  response.send(body);
}

export async function saveAction(request, response) {
  const movie = {
    id: request.body.id,
    title: request.body.title,
    year: request.body.year,
    public: request.body.public
  };
  await save(movie, request.user.id);
  response.redirect(request.baseUrl);
}

export async function rateAction(request, response) {
  let rating = await getRating(request.user.id, request.params.movie);
  let ratingExists = rating != undefined;
  let ratingSet = {
    exists: ratingExists,
    user: request.user.id,
    movie: request.params.movie ,
    rating: request.params.rating
  }
  if (ratingSet.movie == undefined || ratingSet.rating == undefined) {
    console.log("Die Änderungen können nicht gespeichert werden.");
  }
  else{
    await modifyRating(ratingSet);
  }
  response.redirect(request.baseUrl);
}