// server/server.js
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');

// For Production
app.use(express.static(path.resolve(__dirname, "../client/dist")));

app.get('/api', (req, res) => {
    res.json({ message: "Hello from server!" });
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});