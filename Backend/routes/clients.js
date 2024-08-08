const express = require('express');
const router = express.Router();
const multer = require('multer');
const clientController = require('../controllers/clients');

const upload = multer({ dest: './uploads/' }); 
router.post('/', upload.none(), clientController.createClient);
router.get('/', clientController.getClients);
router.get('/item/:id', clientController.getClientById);
router.put('/update/:id', clientController.updateClient);
router.delete('/:id', clientController.deleteClient);

module.exports = router;