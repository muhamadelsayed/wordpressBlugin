const express = require("express");
const cors = require("cors")
const port = 3001;
const bodyParser = require("body-parser");

const app = express();

app.use(cors())
app.use(bodyParser.json())

app.post("/",(req,res)=>{
    console.log(req.body);
    let data = req.body;
    console.log(data.order_details.products);
    if (data) {
        res.json({url:"https://google.com"})
    } else {
        res.json({url:"https://example.com/fail"})
    }
})

app.listen(port,()=>{
    console.log("port:", port);
})