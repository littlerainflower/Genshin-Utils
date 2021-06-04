var express = require('express');
var router = express.Router();
const events = new (require('../data/events/events'))
const items = new (require('../data/items/items'))
const weapons = new (require('../data/weapons/weapons'))

router.get('/', function(req, res, next) {
  const breadcrumb = [
    {
      name : "home",
      url : "/"
    }
  ]
  res.render('index', { title: 'Home', active:"index", events : events.get_curr_events(), breadcrumbs : breadcrumb });
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
  res.render('database', { title: 'Database',active:"database"});
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
  res.render('events', { title: "Events",active:"database" , events : _events, breadcrumbs : breadcrumb});
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
  res.render('event', { title: event.name,active:"database" , event : event, breadcrumbs : breadcrumb});
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
  res.render('items', { title: "Items",active:"database" , items : _items, breadcrumbs : breadcrumb, types:_types});
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
  res.render('item', { title: item.name,active:"database" , item : item, breadcrumbs : breadcrumb, types:_types});
});

router.get('/weapons', function(req, res, next) {
  const _weapons = weapons.get_without_details()
  const _types = weapons.get_types()
  const breadcrumb = [
    {
      name : "home",
      url : "/"
    },
    {
      name : "weapons",
      url : "/weapons/"
    },
  ]
  res.render('weapons', { title: "Weapons",active:"database" , weapons : _weapons, breadcrumbs : breadcrumb, types:_types});
});

router.get('/weapons/:weapon', function(req, res, next) {
  const weapon = weapons.get_(req.params.weapon)
  const _types = weapons.get_types()
  const breadcrumb = [
    {
      name : "home",
      url : "/"
    },
    {
      name : "weapons",
      url : "/weapons/"
    },
    {
      name : weapon.name,
      url : "/weapons/" + req.params.weapon
    },
  ]
  res.render('weapon', { title: weapon.name,active:"database" , weapon : weapon, breadcrumbs : breadcrumb, types:_types});
});

module.exports = router;
