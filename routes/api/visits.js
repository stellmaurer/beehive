module.exports = function(app){
    app.post('/api/visits', function(req, res){
        // Store the supplied visit data
        app.visits.push(req.body);
        var visitId = app.visits.length;
        console.log('Stored visit count: ' + visitId);
        res.status(201).json({'id':visitId});
    });
    /*
    app.get('/number', function(req, res){
        var visitId = app.visits.length;
        console.log('Stored visit count: ' + visitId);
        res.status(200).json({'id':visitId});
    });*/
}
