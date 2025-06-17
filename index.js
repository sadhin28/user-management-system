const express = require('express');
const app= express();
const port = process.env.PORT || 5000;
const cors = require('cors')
app.use(cors())


const users=[
    {id:1,name:"Sabana",email:'sabana@gmail.com'},
    {id:2,name:"Sabnur",email:'sabnur@gmail.com'},
    {id:3,name:"Sabila",email:'sabila@gmail.com'},
]

app.get('/',(req,res)=>{
    res.send('User Management server is running')
})

app.get('/users',(req,res)=>{
    res.send(users)
})
app.post('/users',(req,res)=>{
    console.log(req.body)
})
app.listen(port,(req,res)=>{
    console.log(`Server is running on PORT`,port)
})