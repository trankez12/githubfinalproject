import express from 'express'
const app = express()
const PORT = 3002;

app.get('/server', function (req, res) {
    res.send('Hello World')
  })
  
  app.listen(3000)



app.listen(PORT, () => {
    console.log(`server ${PORT}`)
})