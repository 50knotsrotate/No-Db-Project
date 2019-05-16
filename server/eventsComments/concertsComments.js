// let concertsComments = require ("../db.json");
const concertsComments = require ('../concertsComments.json');

module.exports = {
    getAllConcertComments: (req, res, next) => {
        res.status(200).send(concertsComments);
    },
    postConcertComments: (req, res, next) => {
        const {name, date, content, concertId, idComment} = req.body;
        concertsComments.push({name, date, content, concertId, idComment});
        res.status(200).send(concertsComments);
    },
    updateConcertComments: (req, res, next) => {
        const {id} = req.params;
        const {name} = req.query;
        const index = concertsComments.findIndex((element) => {
            return element.id == id
        });
        res.status(200).send(concertsComments);
    },
    deleteConcertComments: (req, res, next) => {
        const {id} = req.params.id;
        const Index = comments.findIndex(comments => comments.id == id)
        comments.splice(commentIndex, 1);
        res.status(200).send(comments)
    }
}




