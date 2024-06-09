import express from 'express';

import {taskCategory} from '../models/taskCategory.js';

const router = express.Router();

router.get('/api/taskCategories',(req,res)=>{
    taskCategory.find()
        .then(taskCategories => res.json(taskCategories))
        .catch(err => res.status(404).json({ notaskcategoriesfound: 'No such category found' }))
});

export default router;