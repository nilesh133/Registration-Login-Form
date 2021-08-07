const mongoose = require("mongoose");

const db = 'mongodb+srv://nilesh:Gjjsuhja7@cluster0.yus10.mongodb.net/registerationlogin?retryWrites=true&w=majority';

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
.then(() => console.log("connection successful"))
.catch((err) => console.log(err));