const express = require('express');
const app = express();
app.use(express.static('./dist/book_a_flight'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/book_a_flight/' }),
);

app.listen(process.env.PORT || 8080);
