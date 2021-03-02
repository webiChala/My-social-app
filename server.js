// import { Message } from '@material-ui/icons';
import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages.js';
import Pusher from 'pusher';




const app = express();
const pusher = new Pusher({
    appId: "1164514",
    key: "6ca71683632c74d2324a",
    secret: "53173389a1d8cc00c33d",
    cluster: "us2",
    useTLS: true
  });
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();

});

//Connecting our databse
const connection_url = 'mongodb+srv://admin:xKOGF85VGkYN0ex4@cluster0.0itcf.mongodb.net/jimmaAppdb?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true

})

const db = mongoose.connection;
db.once('open', () => {
    console.log('DB connected');
    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();
    changeStream.on('change', (change)=> 
    {
        console.log(change);
        if (change.operationType === "insert"){
            const messageDetails = change.fullDocument;
            pusher.trigger("messages", "inserted",{
                name: messageDetails.user,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received,
            })
        }else {
            console.log("Error triggering Pusher");
        }
    
    })
})
//middleware
app.use(express.json())

app.get('/', function (req,res){
    res.status(200).send('hello ');
});
app.get('/message/sync', (req,res) => {
    
    Messages.find((err,data) => {
        if(err){
            res.status(500).send(err)

        }
        else{
            res.status(200).send(data)
        }
    }
    )
})

app.post('/message/new', (req,res) => {
    const dbMessage = req.body;
    Messages.create(dbMessage, (err,data) => {
        if(err){
            res.status(500).send(err)

        }
        else{
            res.status(201).send(data)
        }
    }
    )
})

app.listen(4000, ()=> (console.log('It works')));
// /message/new