const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ui4hook', (err) => {
    if(!err)
    console.log('MongoDb connection succeeded...');
    else
    console.log('error in the connection :' + JSON.stringify(err, undefined, 2));
});
module.export = mongoose;
