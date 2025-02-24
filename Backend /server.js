const express = require('express');
const PORT = 3000;

const app = express();
app.use(express.json());

const users = [
    { username : "alice" , age : 25 , email : "alice@example.com"   },
    {username : "bob" , age : 30 , email : "bob@example.com" },
    {username : "charlie" , age : 28 , email : "charlie" }
]

app.get('/' , (req , res) => {
    res.send("welcome to backend");
})

app.post('/user' , (req, res) => {
    const {username} = req.body;
    if (!username) {
        return res.status(400).json({message : "username cannot be empty"});
    }
    const usa = users.find(usa => usa.username === username);
    if (usa){
        return res.status(200).json({message:"user found" , data : usa });
    }
    else {
        return res.status(400).json({message : "user not found"});
    }
    

})

app.listen(PORT , () => {
    console.log("server is running");

})