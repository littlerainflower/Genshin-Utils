var express = require('express');
var router = express.Router();
const events = new (require('../data/events/events'))
const items = new (require('../data/items/items'))

router.get('/', function(req, res, next) {
  const breadcrumb = [
    {
      name : "home",
      url : "/"
    }
  ]
  res.render('index', { title: 'Home', events : events.get_curr_events(), breadcrumbs : breadcrumb });
});

router.get('/database', function(req, res, next) {
  const breadcrumb = [
    {
      name : "home",
      url : "/"
    },
    {
      name : "database",
      url : "/database"
    }
  ]
  res.render('database', { title: 'Database'});
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
      name : event.name,
      url : "/events/" + req.params.event
    },
  ]
  res.render('event', { title: event.name , event : event, breadcrumbs : breadcrumb});
});


router.get('/items', function(req, res, next) {
  const _items = items.get_without_details()
  const _types = items.get_types()
  const breadcrumb = [
    {
      name : "home",
      url : "/"
    },
    {
      name : "items",
      url : "/Items/"
    },
  ]
  res.render('items', { title: "Items" , items : _items, breadcrumbs : breadcrumb, types:_types});
});
router.get('/items/:item', function(req, res, next) {
  const item = items.get_(req.params.item)
  const _types = items.get_types()
  const breadcrumb = [
    {
      name : "home",
      url : "/"
    },
    {
      name : "items",
      url : "/items/"
    },
    {
      name : item.name,
      url : "/items/" + req.params.item
    },
  ]
  res.render('item', { title: item.name , item : item, breadcrumbs : breadcrumb, types:_types});
});


function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
function replaceAll(str, match, replacement){
  return str.replace(new RegExp(escapeRegExp(match), 'g'), ()=>replacement);
}

module.exports = router;
