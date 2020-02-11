const express = require('express');
const app = express();

const port = process.env.port || 4000;

app.get('/', (req, res)=>{ 
    res.send("Hello chandru from degital ocean");
})

app.listen(port, () => {
    console.log("Server up and running on port" + port)
})