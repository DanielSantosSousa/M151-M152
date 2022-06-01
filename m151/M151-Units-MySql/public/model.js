import mysql from "mysql2/promise"; 

const connection = await mysql.createConnection({ 
    host: '127.0.0.1',
    //port: 3307,
    user: 'vmadmin',
    password: 'sml12345',
    database: 'moviedb',
}); 

await connection.connect(); 
