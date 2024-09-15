const express = require('express');
const cors = require('cors');  
const routes = require('./src/routes/');
const errorHandler = require('./errorHandler.js');

const app = express();


try {
app.use(cors({origin: 'localhost'}));
app.use(express.json());
routes(app);

app.use(errorHandler.errorHandler);
} catch(e) {
    console.log(e);
}

const port = process.env.PORT || 8080;
app.listen(port, () => { 
    console.log('listening on port ' + port) 
});

try {

} catch (e) {
    console.error('erro', e)
}



