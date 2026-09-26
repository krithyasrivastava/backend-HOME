// to cretae a server we need to import express
const express= require("express");

const app=express();
app.use(express.json()); // middleware use kr rhe hai jisse hum data ko json format me bhej skte hai

const notes=[]
//title,description
app.post("/notes",(req,res)=>{ // ek api create kr rhe hai jisme hum data ko post kr rhe hai
    console.log(req.body);
    notes.push(req.body);
    res.status(201).json({message: "data added successfully"})
})

app.get("/notes",(req,res)=>{
    res.status(200).json({
        message: "notes fetched successfully",
        data: notes
    })
})

app.delete("/notes/:id",(req,res)=>{
    const index= req.params.id
    delete notes[index]
    res.status(200).json({
        message: "note deleted successfully",
    })
})

app.patch("/notes/:index",(req,res)=>{
    const index=req.params.index
    const course=req.body.course
    notes[index].course=course
    res.status(200).json({
        message:"data updated succesfully"
    })
})

module.exports= app;
