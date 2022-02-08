const express = require('express');
const router = express.Router();
const { Report } = require("../models/Report");

router.post('/create',(req,res)=>{

    const report = new Report(req.body);

    report.save((err,doc)=>{
        if(err) return res.status(400).send(err);
        else res.status(200).json({success: true,doc:doc})
    });
})

module.exports = router;