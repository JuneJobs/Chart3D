const _port = 3000;
/**
 * change _port to following 
 * Brandon : 3000
 * Mason : 5000
 * Ella : 4000
 */
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();
app.use(bodyParser.json()); // support json encoded bodies
app.use("/", router);
var _path = __dirname + '/';
router.get('/serverapi', (reqMsg, rspMsg) => {
    
    rspMsg.sendFile('/View/index.html', { 'root': _path });
});
router.get('/View/plotly-latest.min.js', (reqMsg, rspMsg) => {

    rspMsg.sendFile('/View/plotly-latest.min.js', { 'root': _path });
});
app.listen(_port, () => {
    console.log("Simulator is running port" + _port.toString());
})