const {Router} = require('express');
const { getToDo, saveToDo, updateToDo, deleteToDo } = require('../controllers/controller');

const router = Router();

// Get all tasks
router.get('/',getToDo);

// Create a new task
router.post('/save', saveToDo);

// Update an existing task
router.patch('/update/:id', updateToDo);

// Delete a task
router.delete('/delete/:id', deleteToDo);

module.exports = router;