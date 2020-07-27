const express = require('express');
const UserService = require('../../services/user');
const logger = require('../../configs/winston')
const router = express.Router();

router.post('/users', async (req, res, next) => {
  //TODO check if credentials are empty through some middleware
  try{
    const result = await UserService.create(req.body);
    res.json(result);
  }catch(e){
    console.error(e);
    res.status(400).json(e.message)
  } 
});

router.get('/users', async (req, res, next) => {
    const users = await UserService.index();
    res.json(users);
});

router.get('/users/:id', async (req, res, next) => {
    const user = await UserService.show({id: req.params.id});
    return res.json(user)
});

router.post('/users/auth', async (req, res, next) => {
    //TODO check if credentials are empty through some middleware
    const credentials = req.body;
    try{
      const token = await UserService.authenticate(credentials);
      res.json({"token": token});
    }catch(e){
      logger.error(`${e.status || 400} - ${e.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
      res.status(400).json(e.message)
    }
})

module.exports = router;