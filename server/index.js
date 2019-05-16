const express = require('express');
const app = express();
app.use(express.json());
const {
    getAllConcertComments,
    postConcertComments,
    updateConcertComments,
    deleteConcertComments
} = require('./eventsComments/concertsComments');

app.get("/api/concerts-comments", getAllConcertComments);
app.post("/api/all_events", postConcertComments);
app.put("/api/all_events/:id", updateConcertComments);
app.delete("/api/all_events/", deleteConcertComments);

// const{
//     getAllConferenceComments,
//     postConferenceComments,
//     updateConferenceComments,
//     deleteConferenceComments
// } = require('./eventsComments/conferenceComments');

// app.get("api/all_events/conference-comments", getAllConferenceComments);
// app.post("/api/all_events", postConferenceComments);
// app.put("/api/all_events/:id", updateConferenceComments);
// app.delete("/api/all_events/", deleteConferenceComments);

// const{
//     getAllGamesComments,
//     postGamesComments,
//     updateGamesComments,
//     deleteGamesComments
// } = require('./eventsComments/gamesComments');

// app.get("api/all_events", games-comments);
// app.post("/api/all_events", postGamesComments);
// app.put("/api/all_events/:id", updateGamesComments);
// app.delete("/api/all_events/", deleteGamesComments);

const port = 4010;
app.listen(port, () => console.log(`server listening on port ${port}`));