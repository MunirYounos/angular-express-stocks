const   express         =require('express');
const   path            =require('path');
const   logger          = require('morgan');
const   http            = require('http');
const   bodyParser      =require('body-parser');
const   cors            =require('cors');
const   cookieParser    = require('cookie-parser');
const   passport        =require('passport');
const   mongoose        =require('mongoose');
const   config          =require('./config/database');
const   socketio        = require('socket.io');
const   debug           = require('debug')('MEAN2:server');


// database connections
mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
    console.log('Connected to database:======================:::::'+config.database);
});
//if database has error
mongoose.connection.on('error', (err) => {
    console.log('Database not connected: Error:'+err);
});


//Call on Express
const app               = express();

// Routes file
const users             = require('./routes/users');
//Port
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);
var io = socketio(server);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

//bodyParser middleware
app.use(bodyParser.json());
app.use(passport.initialize());
require('./config/passport')(passport);
app.use(passport.session());
app.use('/users', users);

app.get('/', (req, res)=> {
    res.send('Hello from backend: if you see this it means you did not ng build the project');
});

//redirect any other route to index.html
app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

server.listen(port);
server.on('error', onError);
io.on('connection', function (socket) {
    console.log("New client connected");
      users.addClient(socket);
      users.notifyclients();
});
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ====================================================================== ' + bind);
    console.log('Listening on================================================================= ' + bind);
}



    
