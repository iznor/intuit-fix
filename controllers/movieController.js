const data = require('../data/theater.json');

exports.movieController = {
    async getMoviesByTheaterIdDate(req, res){
        const result = []
        data.forEach((theater) => {
            if (theater.id == req.params.theaterId) {
                theater.screenings.forEach(screening => {
                    console.log(result);
                    screening.date === req.params.date ? result.push(screening.movie) : 0;
                });
            }
        })
        res.json(result).status(200);
    }
};