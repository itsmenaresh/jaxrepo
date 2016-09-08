var express = require('express');

module.exports = (function (index) {
    'use strict';
    var api = express.Router();
    	api.post('/sample',function(req,res){
    		console.log(JSON.stringify(req.body));
    		res.json({message:'Api created by Naresh'});
    	});
    	return api;
    })();