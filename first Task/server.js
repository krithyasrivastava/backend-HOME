// to start the server we need to import the app.js file
const app= require("./src/app");

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});