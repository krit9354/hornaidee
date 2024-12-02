const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const { Server } = require('socket.io');
const http = require("http");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "1234",
  database: "hornai_d",
  // multipleStatements: true,
});

db.connect((err) => {
  if (err) {
    console.error('ไม่สามารถเชื่อมต่อฐานข้อมูลได้:', err);
  } else {
    console.log('เชื่อมต่อฐานข้อมูลสำเร็จ');
  }
});


// app.listen(3001, () => {
//   console.log("Yey, your server is running on port 3001");
// });

const server = http.createServer(app);

//socket
const io = new Server(server,{
  cors:{
    origin:"http://localhost:3000",
    methods:["GET","POST"],
  }
})
io.on('connection', (socket) => {
  console.log('a user connected');
  
  socket.on("send message", (data) =>{
    console.log(data);
    db.query(
      "INSERT INTO chat (chanel_id, sender_id, receiver_id, message_text) VALUES(?,?,?,?)",
      [data.chanel,data.sender_id,data.receiver_id,data.message],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log("add message success");
        }
      }
    );
    db.query(
      `SELECT chat.*,sender.user_name as sender,receiver.user_name as receiver FROM chat
      join user_data as sender on chat.sender_id = sender.id
      join user_data as receiver on chat.receiver_id = receiver.id
      WHERE chanel_id = ?
      ORDER BY time ASC;
    `,
      [data.chanel],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          socket.emit("receive_message",result)
          console.log("get message data")
        }
      }
    );
  })
});

//server
server.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});

// App (get)
app.get("/", (req, res) => {
  db.query("SELECT* FROM dorm_detail", (err, result) => {
    res.send(result);
  });
});

//filter(get)
app.get("/filter",(req,res) => {
  console.log(req.query)
  db.query(`SELECT * FROM dorm_detail 
  WHERE min_price >= ? and max_price <= ?
  and  distance >= ? and distance <= ?;`,
  [req.query.minPrice,req.query.maxPrice,req.query.minDistance,req.query.maxDistance],
  (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result);
    }
  })
})

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
app.get("/chat/:chanel", (req, res) => {
  db.query(
    `SELECT chat.*,sender.user_name as sender,receiver.user_name as receiver FROM chat
    join user_data as sender on chat.sender_id = sender.id
    join user_data as receiver on chat.receiver_id = receiver.id
    WHERE chanel_id = ?
    ORDER BY time ASC;
  `,
    [req.params.chanel],
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
app.get("/person/:user", (req, res) => {
  db.query(
    `SELECT chanel.*,user1.user_name as user1,user2.user_name as user2 FROM chanel
    JOIN user_data AS user1 ON chanel.member1 = user1.id
    JOIN user_data AS user2 ON chanel.member2 = user2.id
    WHERE chanel.member1 = ? OR chanel.member2 = ?;`,
    [[req.params.user], [req.params.user]],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// Chat (post send message)
app.post("/send_message",(req,res) => {
  console.log(req.body)
  chanel = req.body.chanel
  sender = req.body.sender_id
  receiver = req.body.receiver_id
  message = req.body.message
  db.query(
    "INSERT INTO chat (chanel_id, sender_id, receiver_id, message_text) VALUES(?,?,?,?)",
    [chanel,sender,receiver,message],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("add message success");
        res.send(result);
      }
    }
  );
})


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

//login
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
  console.log(typeof req.params.id)
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

