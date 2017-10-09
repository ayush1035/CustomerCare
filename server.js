var express = require('express');
var bp = require('body-parser');


var app = express();
var mainRoute = require('./routes/main');

app.use(express.static('public'));
app.use(bp.urlencoded({
    extended: true
}));
app.use(bp.json());

mainRoute.init(
    {
        app:app,
        dbConfig:{
            user:'sa',
            password:'Passw0rd',
            server:'localhost',
            database:'CustomerCare'
        }
    }
)

app.listen(3000, function () {

    console.log("App listening on port 3000");
})