const express= require("express");// apllication initialize kr rhe hai
const app= express(); // server instance create kr rhe hai 
app.get("/",(req,res)=>{
    res.send("hello world");
})
app.get("/about",(req,res)=>{
    res.send("hello about");
})
app.listen(3000,()=>{ // server ko start kr rhe hai 3000 port pr
    console.log("server is eunning on port 3000");

})
 