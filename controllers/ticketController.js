
const crypto = require('crypto');
const tickets = []; //array of Ticket objects, available as long as the server runs

exports.ticketController = {
    async buyTicket(req, res) {
        const body = req.body;
        const newTicketId = crypto.randomUUID();
        const newMovieDetails = body.movieDetails;
        const newPaymentMethod = body.paymentMethod;
        const newTicket = { "id": newTicketId, "Movie": newMovieDetails, "Payment": newPaymentMethod }
        if (newTicketId && newMovieDetails && newPaymentMethod) {
            tickets.push(newTicket);
            res.json(newTicket).status(200);
        }
        else{
            res.status(500).json({"Error":"Error buying a ticket"});
        }
    },
    async checkTicketValid(req, res) {
        let result = false;
        tickets.map((ticket) => ticket.id === req.params.ticketId ? result = true : 0)
        res.status(200).json(result);
    }
};