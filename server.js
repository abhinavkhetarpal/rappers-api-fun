const express = require('express') // installing express
const app = express() // using express and storing it in app
const PORT = 8000 // this can be any number

const rappers = {
    '21 savage': {
        'age' : 30,
        'birthName' : 'Shéyaa Bin Abraham-Joseph',
        'birthLocation' : 'London, England'
    }, 
    'chance the rapper' : {
        'age' : 29,
        'birthName' : 'Chancelor Bennett',
        'birthLocation' : 'Chicago, Illinois'
    },
    'dylan' : {
        'age' : 29,
        'birthName' : 'Dylan',
        'birthLocation' : 'Dylan'
    }
}

// Tell the server what to do if a user requests the home page
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html') // __dirname starts looking for the file wherever the current file (server.js) is located
})

app.get('/api/:rapperName', (request, response) => { // the : is not part of the path, it's the query parameter that's being passed in
    const rappersName = request.params.rapperName.toLowerCase() // params keyword grabs the query parameter from the request (everything after the colon)
    if (rappers[rappersName]){
        response.json(rappers[rappersName])
    }
    else{
        response.json(rappers['dylan'])
    }
})

// Tell the server which port to run on
app.listen(process.env.PORT || PORT, () => { //  process.env.PORT tells express to use Heroku's port as it may not want to use ours 
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})