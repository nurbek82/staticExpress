const express = require('express');
const app = express();

app.use(express.static('public'))
const html=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="styles/main.css">
<script src="scripts/script.js"></script>
<title>Hello, world!</title>
</head>
<body>
  <h1>Hello, world!</h1>
  <main>
  <img src="images/pooh.jpg" alt="Winnie the Pooh">
  <p id="para"></p>
  </main>
</body>
</html>`

app.get('/',(request,response)=> {
    response.status(200)
    response.send(html)
})

app.listen(8080)


 