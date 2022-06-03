const { Router } = require('express');
const { ticketController } = require('../controllers/ticketController');
const ticketRouter = new Router();


ticketRouter.get('/:ticketId', ticketController.checkTicketValid); //res => boolean
ticketRouter.post('/', ticketController.buyTicket); //body: {movieDetails, paymentMethod}

module.exports = { ticketRouter };