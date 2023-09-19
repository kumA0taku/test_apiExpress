// import dotenv from 'dotenv'
// const db = require('./db.js')
// dotenv.config()
const express = require("express");
const mysql_connector = require("mysql2");
// const mysql_connector = require("mysql2/promise");
const app = express();

app.use(express.json());

const connection = mysql_connector.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "YOUR_ROOT_PASSWORD",
  database: "persons",
  connectionLimit: 10, // Adjust this limit as needed
  // host : process.env.MYSQL_HOST,
  // user : process.env.MYSQL_USER,
  // password  : process.env.MYSQL_PASSWORD,
  // database : process.env.MYSQL_DATABASE
});

app.get("/users", async (req, res) => {
  // let params = req.query;
  // console.log(params.id);
  // console.log(params.name);
  connection.connect();
  connection.query("SELECT * FROM persons_info", function (error, results) {
    if(error){
      console.error("Error while updating asset: ", error.message);
      res.status(500).json({error: "Internal Server Error"});
      return;
    }
    res.json( results);
  });
});

app.get("/assets", async (req, res) => {
  // let params = req.query;
  // console.log(params.id);
  // console.log(params.name);
  connection.connect();
  connection.query("SELECT * FROM assets", function (error, results) {
    if(error){
      console.error("Error while updating asset: ", error.message);
      res.status(500).json({error: "Internal Server Error"});
      return;
    }
    res.json( results);
  });
});

app.get("/get_user", async (req, res) => {
  let params = req.query;
  console.log(params.id);
  connection.connect();
  connection.query(`SELECT * FROM persons_info WHERE id= "${params.id}"`, function (error, results) {
    if(error){
      console.error("Error while updating asset: ", error.message);
      res.status(500).json({error: "Internal Server Error"});
      return;
    }
    res.json( results);
  });
});

app.get("/get_asset", async (req, res) => {
  let params = req.query;
  console.log(params.id);
  connection.connect();
  connection.query(`SELECT * FROM assets WHERE id= "${params.id}"`, function (error, results) {
    if(error){
      console.error("Error while updating asset: ", error.message);
      res.status(500).json({error: "Internal Server Error"});
      return;
    }
    res.json( results);
  });
});

// app.get("/get_user", async (req, res) => {
//   let id =params.id
//   const params = req.query;
//   const body = req.body;
//   console.log(body); //print value or Show value
//   connection.connect();
//   connection.query(`SELECT * FROM assets WHERE id= "${params.id}"`, function (error, results) {
//     if(error){
//       console.error("Error while updating asset: ", error.message);
//       res.status(500).json({error: "Internal Server Error"});
//       return;
//     }
//     res.json( results);
//   });
// });

app.post("/add_user", async (req, res, next) => {
  let params = req.query;
  // console.log(params.id);
  console.log(params.name);
  connection.connect();
  connection.query(`INSERT INTO persons_info (name, age) VALUES ("${params.name}", "${params.age}")`, function (error, results) {
    if(error){
      console.error("Error while updating asset: ", error.message);
      res.status(500).json({error: "Internal Server Error"});
      return;
    }
    res.json( results);
  });
});

app.post("/add_asset", async (req, res, next) => {
  let params = req.query;
  // console.log(params.id);
  console.log(params.ass_name);
  connection.connect();
  connection.query(`INSERT INTO assets (ass_name, price, descrip) VALUES ("${params.ass_name}", "${params.price}", "${params.descrip}")`, function (error, results) {
    if(error){
      console.error("Error while updating asset: ", error.message);
      res.status(500).json({error: "Internal Server Error"});
      return;
    }
    res.json( results);
  });
});

app.put("/update_users/", async (req, res, next) => {
  let params = req.query;
  console.log(params.id);
  console.log(params.name);
  console.log(params.age);
  connection.connect();
  connection.query(`UPDATE persons_info SET name="${params.name}", age="${params.age}" WHERE id= "${params.id}"`, function (error, results) {
    if(error){
      console.error("Error while updating asset: ", error.message);
      res.status(500).json({error: "Internal Server Error"});
      return;
    }
    res.json( results);
  });
});

app.put("/update_asset/", async (req, res, next) => {
  let params = req.query;
  console.log(params.id);
  console.log(params.ass_name);
  connection.connect();
  connection.query(`UPDATE assets SET ass_name="${params.ass_name}", price="${params.price}", descrip="${params.descrip}" WHERE id= "${params.id}"`, function (error, results) {
    // try{
    //   res.json( results);
    // }catch(err){
    // console.error(`Error while getting programming languages `, err.message);
    // }
    if(error){
      console.error("Error while updating asset: ", error.message);
      res.status(500).json({error: "Internal Server Error"});
      return;
    }
    res.json( results);
  });
});

app.put("/update_asset/", async (req, res, next) => {
  let params = req.query;
  console.log(params.id);
  console.log(params.ass_name);
  connection.connect();
  connection.query(`UPDATE assets SET ass_name="${params.ass_name}", price="${params.price}", descrip="${params.descrip}" WHERE id= "${params.id}"`, function (error, results) {
    // try{
    //   res.json( results);
    // }catch(err){
    // console.error(`Error while getting programming languages `, err.message);
    // }
    if(error){
      console.error("Error while updating asset: ", error.message);
      res.status(500).json({error: "Internal Server Error"});
      return;
    }
    res.json( results);
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke 💩");
});

app.listen(3000, () => console.log("Example app is listening on port 3000."));
