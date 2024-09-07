const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/tasks',controller.getTasks);
router.post('/createtask',controller.addTask);
router.post('/updatetask',controller.updateTask);
router.post('/completetask',controller.completeTask);

module.exports=router;