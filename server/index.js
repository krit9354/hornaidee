const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "hornai_d",
});

app.post("/",(req, res)=>{
  console.log(req.body)
  const {minprice,maxprice} = req.body
  if (minprice === null || maxprice === null){
    db.query("SELECT* FROM dorm_detail", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  }else{
    db.query("SELECT * FROM dorm_detail WHERE price >= ? and price <= ?",[minprice,maxprice], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  }
  
})

app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
});