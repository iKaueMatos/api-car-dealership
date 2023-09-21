import express from 'express';

const router = express.Router();

router.get('/', (request, response) => {
    console.log("hello wolrd")
    response.send("Hello, world!");
}); 

export default router;
