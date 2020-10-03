const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const adminRoutes = require('./routes/admin');
const shopRouter = require('./routes/shop');
const errorController = require('./controller/error');

// const rootDir = require("./util/path");
// const expressHbs = require('express-handlebars');
// app.engine('hbs',expressHbs({ defaultLayout: 'main-layout',extname:'hbs' }));
// app.set('view engine','hbs');

// app.set('view engine','pug');
app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")))
// app.post('/add',(request, response, next) => {
//     // console.log("working 1.........................");
//     console.log(request.body);
//     response.send("<h1>HELLO FROM ADD </h1>");
// });

// app.use('/',(request, response, next) => {
//     // console.log("working 1.........................");
//     response.send("<form action='add' method='post'><input type='text' name='title'><button>ADD</button></form>");
// });
    app.use('/admin',adminRoutes);
    app.use(shopRouter);
    app.use(errorController.getPageNotFound);
app.listen(4201);