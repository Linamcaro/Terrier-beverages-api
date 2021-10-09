import Express, { application } from 'express';
import { MongoClient } from 'mongodb';

const connectionString = "mongodb+srv://admin:<password>@cluster0.lknzr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = MongoClient(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true, 
});


const app = Express();

app.use(Express.json());

app.get('/products',(req,res)=>{
    // query la base de datos
    res.send('info de los productos');
 
} );

app.post('/products/new', (req,res)=>{
    //implementar codigo para crear productos en la base de datos
    console.log("create product: ",req.body);
    res.send('product created');

});

app.listen(5000,()=>{
    console.log('Escuchando puerto 5000');
}); 