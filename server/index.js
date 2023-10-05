const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "hornai_d",
  multipleStatements: true,
});

// App (get)
app.get("/", (req, res) => {
  db.query("SELECT* FROM dorm_detail", (err, result) => {
    res.send(result);
  });
});

// Dorm Detail (get)
app.get("/detail/:dormID", (req, res) => {
  db.query(
    `SELECT* FROM dorm_detail
            JOIN facility ON dorm_detail.dorm_id = facility.dorm_id
            JOIN safety ON dorm_detail.dorm_id = safety.dorm_id
            WHERE dorm_detail.dorm_id = ?`,
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

//review (get)
app.get("/review/:dormID",(req,res) => {
  db.query(`
  SELECT review.*,writer.user_name as writer FROM review 
join user_data as writer on review.writer_id = writer.id
WHERE  dorm_id = ?;
  `,
  [req.params.dormID],
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  }
  )
})

// Chat (get chat data)
app.get("/chat/:chatID", (req, res) => {
  const p = req.params.chatID.split(",");
  db.query(
    `SELECT chat.*,sender.user_name as sender,receiver.user_name as receiver FROM chat
    join user_data as sender on chat.sender_id = sender.id
    join user_data as receiver on chat.receiver_id = receiver.id
    WHERE sender_id = ? or sender_id = ?
    ORDER BY time ASC;
  `,
    [p[0], p[1]],
    (err, result) => {
      if (typeof result == "undefined") {
        res.status(404).send();
      } else {
        res.send(result);
      }
    }
  );
});

// Chat (get person)
app.get("/person/:person", (req, res) => {
  console.log(req.params.person);
  db.query(
    `SELECT DISTINCT chat.receiver_id,chat.sender_id,sender.user_name as sender,receiver.user_name as receiver FROM chat
    join user_data as sender on chat.sender_id = sender.id
    join user_data as receiver on chat.receiver_id = receiver.id
      WHERE sender_id = 1 or sender_id = 2;`,
    [[req.params.person], [req.params.person]],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("get person success");
        res.send(result);
      }
    }
  );
});
// Chat (post send message) Not done

//Register (post)
app.post("/creat_user", (req, res) => {
  const user_name = req.body.user_name;
  const email = req.body.email;
  const password = req.body.password;
  const profile = "no profile";
  console.log(req.body);
  bcrypt.hash(password, saltRounds, function (err, hash) {
    db.query(
      "INSERT INTO user_data (user_name, email, password,profile) VALUES(?,?,?,?)",
      [user_name, email, hash, profile],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("add user success");
          res.send(result);
        }
      }
    );
  });
});
// app.post("/creat_user", (req, res) => {
//   const user_name = req.query.user_name;
//   const email = req.query.email;
//   const password = req.query.password;
//   const profile = req.query.profile;
//   console.log(req.query);
//   db.query(
//     "INSERT INTO user_data (user_name, email, password, profile) VALUES(?,?,?,?)",
//     [user_name, email, password, profile],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("add user success");
//         res.send(result);
//       }
//     }
//   );
// });
//Login (get) Not done
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(req.query);
  db.query(
    "SELECT * FROM user_data WHERE email=?;",
    [email],
    (err, user, filef) => {
      if (err) {
        console.log(err);
      }
      bcrypt.compare(password, user[0].password, function (err, result) {
        if (result) {
          var token = jwt.sign({ email: user[0].email }, "shhhhh", {
            expiresIn: "1h",
          });
          console.log("login user success", token);
        }
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    }
  );
});

//Manage (post) 
app.put("/update", (req, res) => {
  id = req.body.dorm.dorm_id;
  dorm_name = req.body.dorm.dorm_name;
  min = req.body.dorm.min_price;
  max = req.body.dorm.max_price;
  distance = req.body.dorm.distance;
  url = req.body.dorm.url;
  wifi = req.body.dorm.wifi;
  address = req.body.dorm.address;
  moreinfo = req.body.dorm.more_info;
  size = req.body.dorm.size;
  heater = req.body.dorm.water_heater;
  tv = req.body.dorm.TV;
  air = req.body.dorm.air;
  fridge = req.body.dorm.fridge;
  bike = req.body.dorm.bike;
  car = req.body.dorm.car;
  fitness = req.body.dorm.fitness;
  washer = req.body.dorm.washer;
  pool = req.body.dorm.pool;
  key = req.body.dorm.dorm_key;
  key_card = req.body.dorm.key_card;
  camera = req.body.dorm.camera;
  guard = req.body.dorm.guard;
  finger_print = req.body.dorm.finger_print;
  db.query(
    `
  UPDATE dorm_detail
  SET dorm_name = ?,min_price = ?,max_price = ?,distance = ?,url = ?,wifi = ?,address = ?,more_info = ?,size = ?
  WHERE dorm_id = ?;

  UPDATE facility
  SET water_heater =?, TV =?, air =?, fridge =?, bike =?, car =?, fitness =?, washer =?, pool =?
  WHERE dorm_id = ?;

  UPDATE safety
  SET dorm_key = ?,key_card = ?,camera = ?,guard = ?,finger_print = ?
  WHERE dorm_id = ?;
  `,
    [
      dorm_name,min,max,distance,url,wifi,address,moreinfo,size,id,
      heater,tv,air,fridge,bike,car,fitness,washer,pool,id,
      key,key_card,camera,guard,finger_print,id,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("add user success");
        res.send(result);
      }
    }
  );
});

//Delete dorm(delete)
app.delete("/delete/:id",(req,res)=>{
  const id = req.params.id;
  db.query(`
  DELETE FROM dorm_detail
  WHERE dorm_id = ?;

  DELETE FROM facility
  WHERE dorm_id = ?;

  DELETE FROM safety
  WHERE dorm_id = ?;
  `,[id,id,id],
  (err,result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("delet dorm success");
      res.send(result);
    }
  });
})




//Help  ticket(get)
app.get("/ticket", (req, res) => {
  db.query("SELECT * FROM ticket", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("add user success");
      res.send(result);
    }
  });
});
//Help message(get)
app.get("/ticketMessage", (req, res) => {
  console.log(req.query)
  db.query(
    `SELECT ticket_message.*,sender.user_name as sender,receiver.user_name as receiver FROM ticket_message
    join user_data as sender on ticket_message.sender_id = sender.id
    join user_data as receiver on ticket_message.receiver_id = receiver.id
      WHERE ticket_id = ?
      ORDER BY time ASC;
  `,
    [req.query.ticket_id],
    (err, result) => {
      if (typeof result == "undefined") {
        res.send("");
      } else {
        res.send(result);
      }
    }
  );
});

//Help (post) Not done

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
