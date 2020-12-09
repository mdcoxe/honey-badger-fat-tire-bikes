if(process.env.NODE_ENV === 'development'){
    require('dotenv').config()
};//<= Heroku

//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
const Product = require('./models/product');
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3001;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI; //<=Heroku

// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useUnifiedTopology: true});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open' , ()=>{});

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form


//___________________
// View Engine
//___________________
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//___________________
// Routes
//___________________
//localhost:3000 
app.get('/' , (req, res) => {
  res.send('Hello World!');
});

//Index
app.get('/fattire/', (req, res) => {
    Product.find({}, (err, allProducts) => {
        if(!err){
            console.log(allProducts);
            res.render('Index', {
                products: allProducts,
            })
        } else {
            res.send(err)
        }
    })
});

//New
app.get('/fattire/new', (req, res) => {
    res.render('New')
});

//Delete
app.delete('/fattire/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id, function (err, docs) {
        if(err){
            console.log(err)
         //    res.send(err)
        }else{
            console.log("deleted :", docs)
         //    res.send("deleted :", docs)
        }
    });
     res.redirect('/fattire')
 });

//Update
app.put('/fattire/:id', (req, res)=> {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updateModel) => {
        res.redirect('/fattire/');
    })
})

//Create
app.post('/fattire/', (req, res) => {
    if(req.body.price < 0){
        req.body.price = 'err'
    } 
    if(req.body.qty < 0){
        req.body.qty = 'err'
    }
    Product.create(req.body, (err, createdProduct) => { 
        if(err){
            res.send(err);
        } else {
            res.redirect('/fattire');
        }
    })
});

//Edit
app.get('/fattire/:id/edit', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        res.render('Edit.jsx', {
            product: foundProduct
        })
    })
})

//Show
app.get('/fattire/:id', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        if(!err){
            res.render('Show', {
                product: foundProduct
            })
        } else {
            res.send(err);
        }
    })
});








//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Don\'t sweat the petty things and don\'t pet the sweaty things,', PORT));