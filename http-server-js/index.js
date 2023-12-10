const express = require("express");

const app = express();
const port = 3000;

app.get('/health', function(req, res) {
    res.send({
        "ok": true
    })
})

app.listen(port, function(){
    console.log(`Example app listening on port ${port}`)
})