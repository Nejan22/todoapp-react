const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

app.use(
    cors()
);

app.use(
    express.urlencoded({
        extended:true,
    })
);
app.use(
    express.json()
);
app.get('/tasks',(req,res)=>{
   controller.getTasks(res=>{
        res.send();
   }); 
});
app.post('/addtask',(req,res)=>{
    controller.addTask(req.body,(cb)=>{
        res.send(cb);
    });
});
app.post('/updatetask',(req,res)=>{
    controller.updateTask(req.body,(cb)=>{
        res.send(cb);
    });
});
app.post('/completetask',(req,res)=>{
    controller.completeTask(req.body,(cb)=>{
        res.send(cb);
    });
})

module.exports = app;