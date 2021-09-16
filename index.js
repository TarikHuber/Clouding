const express = require("express");
const app = express();
const port = "3000";

app.use(express.static("./"));
app.get("/", (request, response) => {
    response.sendFile(`${__dirname}/index.html`);
});

const server = app.listen(port, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`App is listening at http://${host}${port}`)
});
