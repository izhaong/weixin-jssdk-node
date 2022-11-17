/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-11-17 23:50:20
 * @LastEditTime: 2022-11-18 00:20:36
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:  
 * @FilePath: /node/routes/index.js
 */
var express = require('express');
var router = express.Router();
var sign = require('../sign.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/config', function(req, res, next) {
  console.log(sign('jsapi_ticket', 'http://example.com'))
  res.send(sign('jsapi_ticket', 'http://example.com'));
});

module.exports = router;
