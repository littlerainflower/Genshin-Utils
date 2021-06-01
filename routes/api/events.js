var express = require('express');
var router = express.Router();
const {get_, get_all} = new (require('../../data/events/events'))

router.get('/get_all', async (req, res) => {
    res.status(200).json({ data: get_all() })
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
