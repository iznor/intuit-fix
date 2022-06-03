const data = require('../data/theater.json');

exports.theaterController = {
    async getTheatersByMovieIdDate(req, res) {
        const result = []
        data.forEach((theater) => {
            theater.screenings.forEach((screening) => {
                screening.movie.id === req.params.movieId
                ?
                    screening.date === req.params.date ? result.push(theater.name) : 0
                : 0;
            })
        })
        if (result.length>0) {
            res.status(200).json(result);
        }
        else{
            res.status(404).json({"Warning":"Can't find a theater that screens this movie in the selected dates"});
        }
    }
};