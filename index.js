const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors());

const courses = require('./data/courses.json')
const allcourses = require('./data/allcourses.json')


app.get('/', (req, res) => {
    res.send('This leaning platform')
});

app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/allcourses', (req, res) => {
    res.send(allcourses)
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedcourse = allcourses.find(c => c.id == id)
    res.send(selectedcourse);
})

app.listen(port, () => {
    console.log('learning platform', port);
})