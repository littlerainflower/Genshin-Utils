var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var favicon = require('serve-favicon');

var app = express();

app.use(favicon(path.join(__dirname,'public','img','fav.ico')));

app.locals.todos = [
  {
    "title" : "Detailed Page",
    "sublist" : [
      {
        "title" : "Items",
        "status" : "Finished"
      },
      {
        "title" : "Events",
        "status" : "Finished"
      },
      {
        "title" : "Weapons",
        "status" : "Important"
      }
    ],
    "status" : "Finished"
  },
  {
    "title" : "Data Collection",
    "sublist" : [
      {
        "title" : "Items",
        "status" : "Finished"
      },
      {
        "title" : "Artifacts",
        "status" : "Important"
      },
      {
        "title" : "Weapons",
        "status" : "Implementing"
      },
      {
        "title" : "Events",
        "status" : "Finished"
      },
      {
        "title" : "Mobs",
        "status" : "Important"
      },
    ],
    "status" : "Implementing"
  },
  {
    "title" : "API Endpoint",
    "status" : "Finished"
  },
  {
    "title" : "Search",
    "status" : "Important"
  },
  {
    "title" : "Calculator",
    "sublist" : [
      {
        "title" : "Resin",
        "status" : "Important"
      },
      {
        "title" : "Weapon",
        "status" : "Important"
      },
      {
        "title" : "Character",
        "status" : "Important"
      }
    ],
    "status" : "Finished"
  },
  {
    "title" : "Wish Simulator",
    "status" : "Inessential"
  },
  {
    "title" : "API and Web App Documentation",
    "status" : "Important"
  },
  {
    "title" : "Make an API Wrapper for Node.js",
    "status" : "Inessential"
  }
]

app.locals.changelog = [
  {
    "date" : "2021/6/7",
    "changes" : [
      "Added Weapon Details Page",
      "Changed Weapon Model"
    ]
  },
  {
    "date" : "2021/6/4",
    "changes" : [
        "Added Info Modal",
        "Bug fixes"
    ]
  },
  {
    "date" : "2021/5/4",
    "changes" : [
      "Added Detailed Page for Events and Items",
      "Added Database Page",
      "Updated UI"
    ]
  }
]

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error', { title: err.status});
});

module.exports = app;
