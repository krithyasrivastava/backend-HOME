//  const fs =require('fs')  Importing the 'fs' module from Node.js for file system operations
// fs.writeFile("hello.txt","HYY Krithya Srivastava", (err)=>{ // creating a file named 'hello.txt' and writing the string "HYY Krithya Srivastava" into it
//     if(err){
//         console.error(err.message);
//     } else {
//         console.log("File written successfully!");
//     }
// });
// fs.appendFile("hello.txt","IM DOING BTECH CSE ", (err)=>{ // appending to the file named 'hello.txt' and writing the string "IM DOING BTECH CSE " into it
//     if(err){
//         console.error(err.message);
//     } else {
//         console.log("File written successfully!");
//     }
// });
// fs.rename("hello.txt","hello1.txt", (err)=>{ // renaming the file 'hello.txt' to 'hello1.txt'
//     if(err){
//         console.error(err.message);
//     } else {
//         console.log("File renamed successfully!");
//     }
// });
// fs.copyFile("hello1.txt", "hello2.txt",(err)=>{ // copying the file 'hello1.txt' to a new file named 'hello2.txt'
//     if(err){
//         console.error(err.message);
//     } else {
//         console.log("File copied successfully!");
//     }
// });
// fs.unlink("hello2.txt",(err)=>{ // deleting the file 'hello2.txt'
//     if(err){
//         console.error(err.message);
//     } else {
//         console.log("File deleted successfully!");
//     }
// }); 
// fs.rmdir("./blankFOlder",(err)=>{ // deleting the directory 'blankFOlder'
//     if(err){
//         console.error(err.message);
//     } else {
//         console.log("Folder deleted successfully!");
//     }
// });



// http and https 
const http = require('http'); // Importing the 'http' module from Node.js for creating an HTTP server
const server= http.createServer((req, res) => { // creating an HTTP server 
    res.end("hello world")
     
})
server.listen(3000);
    