import express from "express";
import cors from "cors"
import mongoose from "mongoose"
import e from "express";

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/loginregisterdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true 

},()=>{
    console.log("database is connected")
})

//create schema

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)



//route

//route for login
app.post("/login", (req, res)=>{
    const {email, password}= req.body;
    User.findOne({email: email}, (error, user)=>{
        if(user){
            if(password === user.password){
                res.send({message: "login successful", user: user})
            }else{
                res.send({message: "password dont match"})
            }

        }else{
            res.send({message: "this email is not register"})
        }
    })

});

//for register
app.post("/register", (req, res)=>{
    const {name, email, password}=req.body
    User.findOne({email:email}, (error, user)=>{
        if(user){
            res.send("user already register")
        }else{
            const user = new User({
                name,
                email,
                password
            })
        
            user.save(error=>{
                if(error){
                    res.send(error)
                }else{
                    res.send({message: "successfull"})
                }
            })
        }
    } )
});

app.listen(5500,()=>{
    console.log("listening successfully")
})