const express = require('express');
const port = process.env.PORT || 8080;

const app = express();
app.use(express.json());

const { theaterRouter } = require("./routers/TheaterRouter");
const { movieRouter } = require("./routers/MovieRouter");
const { ticketRouter } = require('./routers/TicketRouter');

app.use("/", ticketRouter);
app.use("/tickets", ticketRouter);
app.use("/movies", movieRouter);
app.use("/theaters", theaterRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`))