let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let indexRouter = require('./routes/index');
let aboutRouter = require('./routes/about');
let serviceRouter = require('./routes/services');
let projectRouter = require('./routes/projects');
let contactRouter = require('./routes/contact');


let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use('/', indexRouter);
//you created these all????yes
app.use('/about', aboutRouter);
app.use('/service', serviceRouter);
app.use('/service', projectRouter);
app.use('/service', contactRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
app.get('/', function(req, res, next) {
    res.download(__dirname + 'images/Bal_Dhakal_Resume.pdf', Bal - Dhakal_Resume.pdf)
})

module.exports = app;