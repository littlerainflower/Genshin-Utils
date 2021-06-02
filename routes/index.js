var express = require('express');
var router = express.Router();
const events = new (require('../data/events/events'))

router.get('/', function(req, res, next) {
  const breadcrumb = [
    {
      name : "home",
      url : "/"
    }
  ]
  res.render('index', { title: 'Home', events : events.get_curr_events(), breadcrumbs : breadcrumb });
});

router.get('/events', function(req, res, next) {
  const _events = events.get_without_details()
  const breadcrumb = [
    {
      name : "home",
      url : "/"
    },
    {
      name : "events",
      url : "/events/"
    },
  ]
  res.render('events', { title: "Events" , events : _events, breadcrumbs : breadcrumb});
});

function replaceAll(str, match, replacement){
  return str.replace(new RegExp(escapeRegExp(match), 'g'), ()=>replacement);
}

router.get('/events/:event', function(req, res, next) {
  const event = events.get_(req.params.event)
  const breadcrumb = [
    {
      name : "home",
      url : "/"
    },
    {
      name : "events",
      url : "/events/"
    },
    {
      name : replaceAll(req.params.event,"_", " "),
      url : "/events/" + req.params.event
    },
  ]
  res.render('event', { title: event.name , event : event, breadcrumbs : breadcrumb});
});

module.exports = router;
