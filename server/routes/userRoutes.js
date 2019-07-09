import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    console.log('yesss')
    res.send('Welcome to my line')
})

export default router;