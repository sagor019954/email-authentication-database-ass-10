const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const allcourses = require('./data/courses.json')


app.get('/', (req, res) => {
    res.send('This leaning platform')
});
app.get('/allcourses', (rep, res) => {
    res.send(allcourses)
})

app.listen(port, () => {
    console.log('learning platform', port);
})