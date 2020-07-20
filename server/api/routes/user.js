const express = require('express');
const UserService = require('../../services/user');
const router = express.Router();

router.post('/users', async (req, res, next) => {
  //TODO check if credentials are empty through some middleware
  const result = await UserService.create(req.body);
  res.json(result);
});

router.get('/users', async (req, res, next) => {
    const users = await UserService.index();
    res.json(users);
});

router.post('/users/auth', async (req, res, next) => {
    //TODO check if credentials are empty through some middleware
    const credentials = req.body;
    const isValid = await UserService.authenticate(credentials);
  
    if (!isValid) {
      return res.status(400).json({
        success: false,
        message: 'An error occurred while attempting to authenticate your credentials. Please check your email or password.',
      });
    }

    return res.json({
      success: true,
      message: 'Authentication was successful.'
    });
})

module.exports = router;