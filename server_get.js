const { log } = require("console");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const addTwoNumber = (n1, n2) => { return n1 + n2; }

app.get("/addTwonumber", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = addTwoNumber(n1, n2);
    res.json({ statuscode: 200, Data: result });
});


console.log(addTwoNumber(19, 12));
const port = 3040;
app.listen(port, () => {
    console, log("Hello i'm listening to port " + port);
})