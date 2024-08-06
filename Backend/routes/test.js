const exprss = require('express')
const router = exprss.Router()


router.get('/test', (req, res)=>{
    res.status(200).send('heloo')
})

module.exports = router