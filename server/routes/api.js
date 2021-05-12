const express = require('express');

const {
  createData,
  readData,
  updateData,
  deleteData,
  sayHi,

  updatePost,
} = require('../controllers/user_controller');

const router = express.Router();

router
  .post('/', createData)
  .get('/', readData)
  .put('/:id', updateData)
  .delete('/:id', deleteData)

  .patch("/:id", updatePost) ;
module.exports = router;


