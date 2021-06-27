// Arranca la app

const app = require("./app")
require('./database')

 app.listen(8000);
 console.log('Server on port 8000')
