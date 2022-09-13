
const router = require('express').Router()
const User = require('../controllers/user.controller')

router.get('/', User.home)
router.get('/view/:id', User.view)
router.get('/togelStatus/:id', User.togelStatus)
router.get('/add', User.add)
router.post('/addPost', User.addPost)
router.get('/edit/:id', User.edit)
router.post('/editPost/:id', User.editPost)
router.get('/delete/:id', User.delete)

module.exports = router