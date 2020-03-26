const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'))

const messages = [
    { author: 'Sam', message: "hello all", date: 34234234 },
    { author: 'Ben', message: 'Hi to too', date: 3123152 }
]


app.get('/messages', (req, res) => {
    res.send(messages)
})

app.post('/message', (req, res) => {
    const { author, message } = req.body;
    console.log(author, message)
    if (author && messages) {
        messages.push({ author, message, date: new Date().getTime() });
        console.log(messages);
        res.send({ success: true })
    } else {
        res.send({ success: false })
    }

})

app.get('/authors',(req, res)=>{
    let authors = new Set();
    messages.forEach(message=>{
        authors.add(message.author)
    })
    let authorsArray = [...authors]
    res.send(authorsArray);
})

app.get('/message-by-author', (req, res) => {
    let authors = {}
    messages.forEach(message => {
        if (authors.hasOwnProperty(message.author)) {
            authors[message.author].push({ message: message.message, date: message.date })
        } else {
            authors[message.author] = [{ message: message.message, date: message.date }]
        }
    });

    res.send(authors)
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
})