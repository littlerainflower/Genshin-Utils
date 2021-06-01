var express = require('express');
var router = express.Router();
const {get_, get_all, get_by_type, get_types} = new (require('../../data/items/items'))

router.get('/get_all', async (req, res) => {
    res.status(200).json({ data: get_all() })
});

router.get('/get_by_type', async (req, res) => {
    let data = ""
    if(req.body.type === ""){
        data = "Where type?"
    }else{
        data = get_by_type(req.body.type)
    }
    res.status(200).json({ data: data })
});

router.get('/get_types', async (req, res) => {
    res.status(200).json({ data: get_types() })
});

router.get('/get', async (req, res) => {
    let data = ""
    if(req.body.id === ""){
        data = "Where id?"
    }else{
        data = get_(req.body.id)
    }
    res.status(200).json({ data: data })
});

module.exports = router;
