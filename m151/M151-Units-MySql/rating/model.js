import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: '127.0.0.1',
  //port: 3307,
  user: 'vmadmin',
  password: 'sml12345',
  database: 'movie-db',
});

export async function getAverageRatings() {
  const query = 'SELECT movie, AVG(rating) AS averageRating FROM Ratings GROUP BY movie';
  const [data] = await connection.query(query);
  return data;
}

export async function getUserRatings(userId) {
  const query = 'SELECT * FROM Ratings WHERE user = ?'
  let [data] = await connection.query(query, [userId]);
  return data;
}

async function insertRating(rating) {
  const query = 'INSERT INTO Ratings (user, movie, rating) VALUES (?, ?, ?)';
  await connection.query(query, [rating.user, rating.movie, rating.rating]);
}

async function updateRating(rating) {
  const query = 'UPDATE Ratings SET rating = ? WHERE user = ? AND movie = ?';
  await connection.query(query, [rating.rating, rating.user, rating.movie]);
}

export function modifyRating(rating) {
  if (rating.exists) {
    updateRating(rating);
  } else {
    insertRating(rating);
  }
}

export async function getRating(userId, movieId) {
  let query = 'SELECT * FROM Ratings WHERE user = ? AND movie = ?';
  let [data] = await connection.query(query, [userId, movieId]);
  return data.pop();
}