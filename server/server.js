const express        = require('express');
const bodyParser     = require('body-parser');
const mongoose       = require('mongoose');
const morgan         = require('morgan');

const controllers    = require("./controller/controller");

const app            = express();
const port           = process.env.PORT || 8000;

const options       = {
    server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }
};

mongoose.Promise    = global.Promise;

mongoose.connect('mongodb://localhost:27017/timeline');


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.route("/api/timeline")
.get(controllers.getTimelineList)
.post(controllers.createTimeline);

app.route("/api/timeline/:id")
.get(controllers.getTimeline)
.delete(controllers.deleteTimeline);

app.route("*").get((req, res) => {
    res.send('잘못된 접근입니다.');
});
  

app.listen(port);

console.log(`listening on port ${port}`);