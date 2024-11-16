const express = require("express")
require('dotenv').config()
const app = express()
app.use(express.json())
// app.get()
// app.post()
// app.put()
// app.delete()
const courses = [
    {id: 1 , name:"html"},
    {id: 2 , name:"CSS"},
    {id: 3 , name:"JS"}
]

app.get("/" , (req , res)=>{
    res.send("Hello Wooooooooorld")
})
app.get("/api/courses/:id?" , (req, res) =>{
    id = req.params.id
    if(isNaN(id)){
        res.send(courses)
    }else{
    const result = courses.find(c => c.id ===  parseInt(req.params.id) )
    if(result){
        res.send(result)
    }else{
        res.status(404).send("Result Not Found")
    }
    
    } 
})



app.post("/api/courses/" , (req , res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(courses)
})

const port = process.env.APP_PORT || 3000
app.listen(port , () => {
    console.log(`The Express Project ${port}`)
})