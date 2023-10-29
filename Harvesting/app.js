
const express = require('express');
const path = require("path");
const app = express();
const bodyparser = require('body-parser');
const port = 4000;
const mongoose = require('mongoose');
                        
                        
main().catch(err => console.log(err));66666
                        
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/FarmNextIn');
}
                        
// Define mongoose schema
const formSchema = new mongoose.Schema({
     uname: String,
     email: String,
     phone: String,
     address: String,
     zip: String,
     pname: String,
     quantity: String,
     price: String,
     desc: String,
    });

    const formSchema1 = new mongoose.Schema({
        email:String,
        password:String
    })
    const Form = mongoose.model('FarmerDetails', formSchema );
    const Form1 = mongoose.model('UserDetails', formSchema1 );
                        
                        
//EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'))//For serving static files
app.use(express.urlencoded());
                        
//PUG SPECIFIC STUFF
app.set('view engine', 'ejs') //Set the template engine
app.set('views',path.join(__dirname,'views')); //Set the views directory
                        
//ENDPOINT
app.get('/',(req,res)=>{
    const params = {}
    res.status(200).render('index.ejs');
})
app.get('/sell',(req,res)=>{
    const params = {}
    res.status(200).render('seller.ejs');
})
app.get('/cart',(req,res)=>{
    const params = {}
    res.status(200).render('cart.ejs');
})
app.get('/checkout',(req,res)=>{
    const params = {}
    res.status(200).render('checkout.ejs');
})
app.get('/order',(req,res)=>{
    const params = {}
    res.status(200).render('order.ejs');
})
app.get('/farminfo',(req,res)=>{
    const params = {}
    res.status(200).render('farminfo.ejs');
})
app.get('/buyer',(req,res)=>{
    const params = {}
    res.status(200).render('buyer.ejs');
})

app.post('/contact',(req,res)=>{
    var myData = new Form(req.body);
    myData.save().then(()=>{
        setTimeout(()=>{
            res.redirect('/sell');
        },1500)
    }).catch(()=>{
         res.status(404).send("Item was not saved to the database")
    });
})
app.post('/login',(req,res)=>{
    var myData = new Form1(req.body);
    myData.save().then(()=>{
        setTimeout(()=>{
            res.redirect('/');
        },1500)
    }).catch(()=>{
         res.status(404).send("Item was not saved to the database")
    });
})
app.listen(port,()=>{
    console.log(`Server running at port ${port}`);
}) 
                    