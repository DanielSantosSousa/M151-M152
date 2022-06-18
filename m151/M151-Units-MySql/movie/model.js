import mysql from 'mysql2/promise';
const connection = await mysql.createConnection({
  host: '127.0.0.1',
  //port: 3307,
  user: 'vmadmin',
  password: 'sml12345',
  database: 'movie-db',
});
await connection.connect();

export async function getAll(userId) {
  let query = 'SELECT * FROM Movies WHERE public = 1 OR ownerId = ? OR ownerId IS NULL';
  const [data] = await connection.query(query, [userId]);
  return data;
}

async function insert(movie, userId) {
  const query = 'INSERT INTO Movies (title, year, public, ownerId) VALUES (?, ?, ?, ?)';
  const [result] = await connection.query(query, [movie.title, movie.year, movie.public, userId]);
  return { ...movie, id: result.insertId };
}

async function update(movie, userId) {
  const query = 'UPDATE Movies SET title = ?, year = ?, public = ?, ownerId = ? WHERE id = ?';
  await connection.query(query, [movie.title, movie.year, movie.public, userId, movie.id]);
  return movie;
}

export async function get(id) {
  const query = 'SELECT * FROM Movies WHERE id = ?';
  const [data] = await connection.query(query, [id]);
  return data.pop();
}

export async function remove(id) {
  const query = 'DELETE FROM Movies WHERE id = ?';
  await connection.query(query, [id]);
  return;
}

export function save(movie, username) {
  if (!movie.id) {
    return insert(movie, username);
  } else {
    return update(movie, username);
  }
}