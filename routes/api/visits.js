module.exports = function(app){
    app.post('/api/visits', async function(req, res){
        // Store the supplied visit data
        var visitId = app.visits.length;
        process.send({ msg: req.body });
        res.status(201).json({'id':visitId});
    });
}
