const express = require('express')
const  router = express.Router()

router.get( '/auth', (req, res) => {
res.send('อยู่หน้า auth!')

})

module.exports = router
