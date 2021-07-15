const express = require('express');


const router = express.Router();

const articles = [
    {id: 1, title: 'узнаем', content: 'очень'},
    {id: 2, title: 'получилось', content: 'интересно'},
    {id: 3, title: 'ли', content: 'мне'}
];


router.get('/checklist', (req, res) => {
    const newArr = articles.map(val => {
        return{id: val.id, title: val.title}
    });
    res.json({
        status: 'ok',
        result:{
            list: newArr
        }
    });
});

module.exports = router;