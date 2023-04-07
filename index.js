pconst express = require('express');
const app = express();

const port = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send("hello people!we are the Goal diggers")
})
app.listen(port, () => {
    console.log("server running");
})
