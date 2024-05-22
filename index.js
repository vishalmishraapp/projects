const express = require("express");
const jwt = require("jsonwebtoken");
// const router = express.Router();
const app = express();

//////.......Sequelized Example....///////
const Sequelize = require('sequelize');
const { toDefaultValue } = require('sequelize/lib/utils');
const sequelize = new Sequelize('Employee', 'vishal', 'admin', {
//   host:'localhost',
//   port: 5432,
  dialect: 'postgres'
});

// sequelize.authenticate().then(() =>{
//   console.log("connection successfull");
// }).catch((err) =>{
//   console.log("Error connecting database!");
// });

// console.log("Another Task.");


// // sequelize.authenticate().then(() =>{
// //     console.log("connection successfull");
// // }).catch((err) =>{
// //     console.log("Error connecting to database");
// // });
// console.log("Another Task.");

const User = sequelize.define('user', {
 user_id:{
   type: Sequelize.DataTypes.INTEGER,
   primaryKey: true,
   autoincrement: true
 },

  username:{
    type: Sequelize.DataTypes.STRING,
    allowNull: false
  },

  password:{
    type: Sequelize.DataTypes.STRING
  },

  age:{
    type: Sequelize.DataTypes.INTEGER,
    defaultValue: 21
  }
},
{
  freezeTableName: true,
  timestamps: false
});

User.sync({ force: true }).then((data) =>{
  console.log("Table and Model synced successfully!");
}).catch((err) =>{
  console.log("Error syncing the Table and Model!");
});


//////.......Async Function Example....///////
// async function myfunction() {
//  await sequelize.authenticate();
//  console.log("connection successfull");
// }

// myfunction();


// console.log("I am JS");

// const express = require("express")
// const app = express()

// app.get("/",(req, res) => {
//     console.log("Hello World")
//     res.send("heyyy siri")
//     // res.sendStatus(500)
// })

// app.listen(3000)

// const app = require('express')();

// const PORT = 4000;
// app.listen(
//   PORT,
//   () => console.log(`server is running on ${PORT}`)
// );

// app.get('/getRequest', (req,res) =>{
//   res.send("Hello this is successfull Get Request")
// });

// app.post('/postRequest', (req,res) =>{
//   res.send("Hello this is successfull Post Request")
// });


app.get("/", (req,resp) =>{
  resp.json({
    message: "a simple api"
  })
})

 

app.listen(5000, ()=>{
  console.log("app is running on 5000 port");
})