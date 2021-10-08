import Express, { application } from 'express';

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