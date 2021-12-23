const mongoose = require('mongoose');
const dbName = "test";
require("dotenv").config();


const uri = process.env.URI_MONGODB || `mongodb+srv://dbmexepanela:${process.env.MONGO_PSWD}o@recipe-cluster1.fhuul.mongodb.net/${dbName}?retryWrites=true&w=majority`;

console.log("Connecting to database...");
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => { console.log(err) });