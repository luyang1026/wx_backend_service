var express = require('express')
var app = express()

var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.text({type: 'text/*'}))
app.use((req,res,next)=>{
  res.set({'access-control-allow-origin':'*'})
  res.set({'access-control-allow-headers':'*'})
  next()
})
app.get('/wx',(req,res)=>{
  var echostr = req.query.echostr;
  console.log(echostr)
  res.send(echostr)
})
app.post('/wx',(req,res)=>{
  console.log(req.body)
  console.log(req.get('Content-Type'))
  res.send('success')
})
app.listen(3000,()=>{
  console.log('listening on 3000')
})

