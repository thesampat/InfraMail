const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clients');

router.post('/', clientController.createClient);
router.get('/', clientController.getClients);
router.get('/item/:id', clientController.getClientById);
router.put('/update/:id', clientController.updateClient);
router.delete('/:id', clientController.deleteClient);

module.exports = router;