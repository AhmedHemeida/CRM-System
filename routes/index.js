const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const customerController = require('../controllers/customerController');
const leadController = require('../controllers/leadController');
const interactionController = require('../controllers/interactionController');

// Users
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// Customers
router.get('/customers', customerController.getAllCustomers);
router.post('/customers', customerController.createCustomer);
router.get('/customers/:id', customerController.getCustomerById);
router.put('/customers/:id', customerController.updateCustomer);
router.delete('/customers/:id', customerController.deleteCustomer);

// Leads
router.get('/leads', leadController.getAllLeads);
router.post('/leads', leadController.createLead);
router.get('/leads/:id', leadController.getLeadById);
router.put('/leads/:id', leadController.updateLead);
router.delete('/leads/:id', leadController.deleteLead);

// Interactions
router.get('/interactions', interactionController.getAllInteractions);
router.post('/interactions', interactionController.createInteraction);
router.get('/interactions/:id', interactionController.getInteractionById);
router.put('/interactions/:id', interactionController.updateInteraction);
router.delete('/interactions/:id', interactionController.deleteInteraction);

module.exports = router;