const express = require('express')
const Routeur = require('./routes/SiteRoutes');
let app = express()

app.set('view engine', 'ejs')


app.use(express.urlencoded({
    extended: true
}))

app.use('/cssFiles', express.static(__dirname + '/css'));
app.use(Routeur)





app.listen(3001)