module.exports = function(app){
    app.post('/api/visits', async function(req, res){
        // Store the supplied visit data
        app.visits.push(req.body);
        var visitId = app.visits.length;
        console.log("BeeId: ", visitId);
        res.status(201).json({'id':visitId});
    });
}
