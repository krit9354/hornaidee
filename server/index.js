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
app.get("/", (req, res) => {
  db.query("SELECT* FROM dorm_detail", (err, result) => {
    res.send(result);
  });
});

app.get("/:dormID", (req, res) => {
  db.query(
    `SELECT* FROM dorm_detail
            JOIN facility ON dorm_detail.id = facility.id
            JOIN safety ON dorm_detail.id = safety.id
            WHERE dorm_detail.id = ?`,
    [req.params.dormID],
    (err, result) => {
      if (typeof result[0] == "undefined") {
        res.status(404).send();
      } else {
        res.send(result[0]);
      }
    }
  );
});

app.post("/", (req, res) => {
  console.log(req.body);
  const { price_range, distance_range } = req.body;
  if (price_range === null || distance_range === null) {
    db.query("SELECT* FROM dorm_detail", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  } else {
    db.query(
      "SELECT * FROM dorm_detail WHERE price >= ? and price <= ?",
      [minprice, maxprice],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  }
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
