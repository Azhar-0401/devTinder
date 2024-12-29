// console.log("this is starting file")
const express = require("express");

const app = express();

app.get("/user", (req, res)=>{
    res.send({firstName: "Azhar", lastName : "Ansari"});
})


app.use("/test", (req, res)=>{
    res.send("Hello from the server")
});

// app.use("/", (req, res)=>{
//     res.send("Hello")
// });

app.post("/user", (req, res)=>{
    // console.log("save data to database"); 
    res.send("data successfully save to the database");
})

app.delete("/user", (req, res)=>{
    // console.log("save data to database"); 
    res.send("Deleted successfully");
})


app.use("/user", (req, res)=>{
    res.send("HAHAHA");
})


app.listen(3000, ()=>{
    console.log("server is successfully");
});