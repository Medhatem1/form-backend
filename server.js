const express = require('express');
const app = express();
require('./connexion')
const ListST = require('./modeldb')

var cors = require('cors')
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json());

//crud applications
app.post('/', async(req, res) =>{
  const {FirstName, LastName, Age} = req.body;
  try{
      const data = await ListST.create({FirstName, LastName, Age});
      res.json(data)
  }catch(error){
      res.status(500).send(error)
  }
})
app.get('/listStudent', async(req, res) =>{
  try {
      const posts = await ListST.find()
      res.json(posts)
  } catch (error) {
      res.status(500).send(error)
  }
})


app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
