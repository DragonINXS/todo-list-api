const express = require('express');
const router = express.Router();
const Task = require('../models/task');

/* GET home page */
router.get('/tasks', (req, res, next) => {
    //   res.render('index');

    Task.find()
        .then((allTheTasks) => {
            res.json(allTheTasks);
        })
        .catch(err => console.log('Error finding all the tasks', err));
    
});

router.post('/tasks/create', (req, res, next) => {
    Task.create({
        title: req.body.title,
        description: req.body.description,
        doneyet : req.body.doneyet
    })
        .then((response) => {
            res.json(response);
        })
        .catch(err => console.log('Error creating tast: ', err));
});

router.get('/tasks/:id/details', (req, res, next) => {
    const id = req.params.id;
    Task.findById(id)
        .then((theTask) => {
            res.json(theTask)
                .catch(err => console.log('Error while finding task by ID: ', err));
        });
});

router.post('/tasks/:id/update', (req, res, rext) => {
    const id = req.params.id;
    Task.findByIdAndUpdate(id, {
        title: req.body.title,
        description: req.body.description,
        doneyet: req.body.doneyet
    })
        .then(() => {
            res.json();
        })
        .catch(err => console.log('Error while updating task: ', err));
});

router.post('/tasks/:id/delete', (req, res, next) => {
    Task.findByIdAndRemove(req.params.id)
        .then(() => {
            res.json();
        })
        .catch(err => console.log('Error while deleting task: ', err));
});


module.exports = router;
