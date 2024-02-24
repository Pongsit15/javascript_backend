const express = require('express')
const router = express.Router()
const {read, list, adddata, editdata, dledata} = require ('../Controllers/porduct')

router.get('/product', list)
router.get('/product/:id', read)
router.post('/product', adddata)
router.put('/product/:id',editdata)
router.delete('/product/:id', dledata)


module.exports = router