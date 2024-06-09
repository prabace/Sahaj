import express from 'express';
import {taskcategoryRouter} from './src/routes/taskcategoryRoutes';

const app = express();

const PORT = 5000;

app.use("/api/taskCategories", taskcategoryRouter);


app.get('/',(req, res)=>
    res.send(`Node and expreess server running on port ${PORT}`)
)

app.listen(PORT, ()=>
        console.log(`Your sever is running on port ${PORT}`)
)