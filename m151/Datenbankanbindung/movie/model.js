import mysql from "mysql2/promise";
const connection = await mysql.createConnection({
    host: "127.0.0.1",
    user: "vmadmin",
    password: "sml12345",
    database: "movie-db",
});
await connection.connect();

export async function getAll() {
    const query = 'SELECT * FROM Movies';
    const [data] = await connection.query(query);
    return data;
}

async function insert(movie) {
    //TODO
}

async function update(movie) {
    //TODO
}

export async function get(id) {
    const query = 'SELECT * FROM Movies WHERE Movies.id = ' + mysql.escape(id);
    const [data] = await connection.query(query);
    return data;
}

export async function remove(id) {
    const query = 'DELETE * FROM Movies WHERE Movies.id = ' + mysql.escape(id);
    const [data] = await connection.query(query);
    return data;
}

export function save(movie) {
    //Ich weiss noch nicht wie ich wegen dem Movie machen soll, deswegen konnte ich die 3 noch nicht machen.
}