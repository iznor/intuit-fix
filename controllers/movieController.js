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
        if (result.length>0) {
            res.status(200).json(result);
        }else{
            res.status(404).json({"Warning":"Can't find a movie that is screened by this theater in the selected dates"})
        }
    }
};