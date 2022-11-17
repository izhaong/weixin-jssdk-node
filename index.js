/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-11-17 23:49:08
 * @LastEditTime: 2022-11-17 23:49:10
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:  
 * @FilePath: /node/index.js
 */
const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/config', (req, res) => {
  res.send('hello world')
})