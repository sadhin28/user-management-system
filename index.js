const express = require('express');
const app= express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
app.use(cors())
app.use(express.json())

const users=[
    {id:1,name:"Sabana",email:'sabana@gmail.com'},
    {id:2,name:"Sabnur",email:'sabnur@gmail.com'},
    {id:3,name:"Sabila",email:'sabila@gmail.com'},
]

//pass: PUJcZgkHBvUHaL7C
//username: taosifsadhin113
//mongodb code start

const uri = "mongodb+srv://taosifsadhin113:PUJcZgkHBvUHaL7C@user-management-system.h2w7at6.mongodb.net/?retryWrites=true&w=majority&appName=user-management-system";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
//mongodb code end
app.get('/',(req,res)=>{
    res.send('User Management server is running')
})

app.get('/users',(req,res)=>{
    res.send(users)
})
app.post('/users',(req,res)=>{
    console.log('Post api hiting')
    
    const newuser = req.body;
    newuser.id= users.length + 1;
    users.push(newuser);
    res.send(newuser);
    console.log(req.body)
    
})
app.listen(port,(req,res)=>{
    console.log(`Server is running on PORT`,port)
})