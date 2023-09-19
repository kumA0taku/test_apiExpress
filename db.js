// // import mysql from 'mysql2'

// const mysql = require('mysql2');

// // import dotenv from 'dotenv'
// // dotenv.config()

// const connection = mysql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password  :'YOUR_ROOT_PASSWORD',
//     database : 'persons'
//     // host : process.env.MYSQL_HOST,
//     // user : process.env.MYSQL_USER,
//     // password  : process.env.MYSQL_PASSWORD,
//     // database : process.env.MYSQL_DATABASE
//     });

// export async function getNotes() {
//   const [rows] = await connection.query('SELECT * FROM persons_info')
//   return rows
// }

// // async function getNote(id) {
// //   const [rows] = await connection.query(`
// //   SELECT * 
// //   FROM persons_info
// //   WHERE id = ?
// //   `, [id])
// //   return rows[0]
// // }

// // export async function createNote(title, contents) {
// //   const [result] = await pool.query(`
// //   INSERT INTO notes (title, contents)
// //   VALUES (?, ?)
// //   `, [title, contents])
// //   const id = result.insertId
// //   return getNote(id)
// // }