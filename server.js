const express = require('express');
const app = express();
app.use(express.static('./dist/flightbooking'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/flightbooking/' }),
);

app.listen(process.env.PORT || 8080);
