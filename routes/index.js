var express = require('express');
var router = express.Router();
const events = new (require('../data/events/events'))

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', events : events.get_curr_events() });
});

router.get('/events/:event', function(req, res, next) {
  const event = events.get_(req.params.event)
  res.render('event', { title: event.name , event : event });
});
module.exports = router;
