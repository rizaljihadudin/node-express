const express = require('express')
const router = express.Router()

const blogController = require('../controllers/blog')

router.route('/blog')
    .get(blogController.getBlogs)
    .post(blogController.storeData)
    
router.put('/blog/:id', blogController.updateData)
router.delete('/blog/:id', blogController.deleteData)

module.exports = router