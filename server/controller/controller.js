const timelineModel             = require("../models/model");

function getTimelineList(req,res)
{
    timelineModel.find(null, null, { sort: { postDate : 1 } }, (err, timeline) => {
        
        if (err) {
            res.send(err);
        }

        res.json(timeline); // Games sent as json
    });
}

function getTimeline(req, res)
{
    const { id } = req.params;
    // Query the db for a single game, if no errors send it to the client
    timelineModel.findById(id, (err, timeline) => {
        
        if (err) {
            res.send(err);
        }

        res.json(timeline); // Game sent as json
    });
}

const createTimeline = (req, res) => {
    // We assign the game info to a empty game and send a message back if no errors
    let timeline = Object.assign(new timelineModel(), req.body);
    // ...Then we save it into the db
    timeline.save(err => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'game created' }); // A simple JSON answer to inform the client
    });
};

const deleteTimeline = (req, res) => {
    // We remove the game by the given id and send a message back if no errors
    const { id } = req.params;
    // Query the db for a single game, if no errors send it to the client
    Game.remove(id, (err) => {
        
        if (err) {
            res.send(err);
        }

        res.json({ message: 'timeline successfully deleted' });  // Game sent as json
    });
};

module.exports.getTimelineList = getTimelineList;
module.exports.getTimeline     = getTimeline;
module.exports.createTimeline  = createTimeline;
module.exports.deleteTimeline  = deleteTimeline;