const express = require('express');
const routes = require('../config/routes');
require('../config/mongodb');


const app = express();

app.use(express.json());
app.use(routes);

const port = 3333;
app.listen(port, (err) =>{
    if(err) console.error(err)
    
    console.info(`Server Running on http://localhost:${port}`);
});